// Shader code
const shaderCode = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define N normalize
#define MN min(R.x,R.y)
#define S smoothstep
#define SE(v,s) S(s+1./MN,s-1./MN,v)
#define hue(a) (.25+.6*cos(6.3*(a)+vec3(0,83,21)))
#define rot(a) mat2(cos(a),-sin(a),sin(a),cos(a))
#define mv (.1*sin(length(p.xz)+T*2.+p.z-p.x*3.))
float map(vec3 p) {
	p.y+=20.;
	vec2 c=vec2(length(p.xz)-1.+mv, abs(p.y)-20.);
	float d=length(max(c,.0))+min(.0,max(c.x,c.y));
	d*=.5;
	return d;
}
vec3 norm(vec3 p) {
	float h=1e-3; vec2 k=vec2(-1,1);
	return N(
		k.xyy*map(p+k.xyy*h)+
		k.yxy*map(p+k.yxy*h)+
		k.yyx*map(p+k.yyx*h)+
		k.xxx*map(p+k.xxx*h)
	);
}
void cam(inout vec3 p) {
	p.yz*=rot(.42);
	p.xz*=rot(-.42);
}
void main() {
	vec2 uv=(FC-.5*R)/MN;
	vec3 col=vec3(0),
	p=vec3(0,0,-7),
	rd=N(vec3(uv,3));
	cam(rd); cam(p);
	float dd=.0;
	for (float i=.0; i++<400.;) {
		float d=map(p);
		if (abs(d)<1e-3 || dd>200.) break;
		p+=rd*d;
		dd+=d;
	}
	vec3 mat=vec3(0), n=norm(p), lp=vec3(0,0,-3), l=N(lp-p);
	float refl=clamp(dot(reflect(rd,n),l),.0,1.), fres=pow(clamp(1.+dot(rd,n),.0,1.),5.);
	mat+=mix(vec3(1),hue(.8*max(.95,length(p)+mv)-T*.1),min(.95,length(p)+mv));
	mat+=.2;
	mat+=1.7*pow(clamp(refl,.0,1.),5.);
	mat=mix(mat,vec3(0),fres);
	if (dd<20.) col+=mat;
	mat=mix(vec3(.1,.2,.3),vec3(.01,.02,.03),S(.0,1.,.075*length(uv*10.)));
	col=tanh(col*col);
	col/=1.+exp(-col*col);
	col=sqrt(col);
	if (dd>200.) col+=mat;
	col=max(col,.08);
  O=vec4(col,1);
}`;

export default shaderCode; 