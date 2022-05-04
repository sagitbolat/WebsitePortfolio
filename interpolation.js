
export function cosineInterpolation(x, y, a) {
   let b;
   b = (1-Math.cos(a*Math.PI))/2;
   return(x*(1-b)+y*b);
}

export function cubicInterpolate(y0, y1, y2, y3, mu)
{
    let a0;
    let a1; 
    let a2; 
    let a3; 
    let mu2;
 
    mu2 = mu*mu;
    a0 = y3 - y2 - y0 + y1;
    a1 = y0 - y1 - a0;
    a2 = y2 - y0;
    a3 = y1;
 
    return(a0*mu*mu2+a1*mu2+a2*mu+a3);
}

export function lerp(x, y, a) {
    return (1 - a) * x + a * y;
}
  
export function scalePercent(scrollPercent, start, end) {
    return (scrollPercent - start) / (end - start);
}