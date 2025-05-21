'use client';

import { useEffect, useRef } from 'react';
import shaderCode from './shader';
import { Renderer, Store, PointerHandler, Editor } from './shaderUtils';

export default function ShaderAnimation() {
  const canvasRef = useRef(null);
  const editorRef = useRef(null);
  const errorRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    let editMode = false;
    let resolution = 1;
    let renderDelay = 1000;
    let dpr = Math.max(1, resolution * window.devicePixelRatio);
    let frm, source, editor, store, renderer, pointers;
    const shaderId = 'XJJGbya';

    const canvas = canvasRef.current;
    const codeEditor = editorRef.current;
    const error = errorRef.current;
    const indicator = indicatorRef.current;

    // Create a script element for the shader code
    const script = document.createElement('script');
    script.type = 'x-shader/x-fragment';
    script.textContent = shaderCode;
    document.body.appendChild(script);

    function resize() {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (renderer) {
        renderer.updateScale(dpr);
      }
    }

    function toggleView() {
      editor.hidden = btnToggleView.checked;
    }

    function reset() {
      let shader = source;
      editor.text = shader ? shader.textContent : renderer.defaultSource;
      store.putShaderSource(shaderId, editor.text);
      renderThis();
    }

    function toggleResolution() {
      resolution = btnToggleResolution.checked ? .5 : 1;
      dpr = Math.max(1, resolution * window.devicePixelRatio);
      pointers.updateScale(dpr);
      resize();
    }

    function loop(now) {
      renderer.updateMouse(pointers.first);
      renderer.updatePointerCount(pointers.count);
      renderer.updatePointerCoords(pointers.coords);
      renderer.updateMove(pointers.move);
      renderer.render(now);
      frm = requestAnimationFrame(loop);
    }

    function renderThis() {
      editor.clearError();
      store.putShaderSource(shaderId, editor.text);

      const result = renderer.test(editor.text);

      if (result) {
        editor.setError(result);
      } else {
        renderer.updateShader(editor.text);
      }
      cancelAnimationFrame(frm);
      loop(0);
    }

    const debounce = (fn, delay) => {
      let timerId;
      return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(this, args), delay);
      };
    };

    const render = debounce(renderThis, renderDelay);

    function init() {
      source = script;
      document.title = "Something Really Soft";

      renderer = new Renderer(canvas, dpr);
      pointers = new PointerHandler(canvas, dpr);
      store = new Store(window.location);
      editor = new Editor(codeEditor, error, indicator);
      editor.text = source.textContent;
      renderer.setup();
      renderer.init();

      if (!editMode) {
        btnToggleView.checked = true;
        toggleView();
      }
      if (resolution === .5) {
        btnToggleResolution.checked = true;
        toggleResolution();
      }
      canvas.addEventListener('shader-error', e => editor.setError(e.detail));

      resize();

      if (renderer.test(source.textContent) === null) {
        renderer.updateShader(source.textContent);
      }
      loop(0);
      window.onresize = resize;
      window.addEventListener("keydown", e => {
        if (e.key === "L" && e.ctrlKey) {
          e.preventDefault();
          btnToggleView.checked = !btnToggleView.checked;
          toggleView();
        }
      });
    }

    init();

    return () => {
      window.onresize = null;
      cancelAnimationFrame(frm);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} id="canvas" className="w-full h-full" />
      <textarea
        ref={editorRef}
        id="codeEditor"
        className="editor hidden"
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
        translate="no"
      />
      <pre ref={errorRef} id="error" className="hidden" />
      <div ref={indicatorRef} id="indicator" className="hidden" />
      <div id="controls" className="hidden">
        <div className="controls">
          <input id="btnToggleView" className="icon" type="checkbox" name="toggleView" />
          <input id="btnToggleResolution" className="icon" type="checkbox" name="toggleResolution" />
          <input id="btnReset" className="icon" type="checkbox" name="reset" />
        </div>
      </div>
    </div>
  );
} 