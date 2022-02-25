import ParallaxMousemove from 'react-parallax-mousemove'
export default function Navbar(){
    return(<div>
        <ParallaxMousemove  fullHeight={true}>
  
  <ParallaxMousemove.Layer config={{
      xFactor:  0.05,
      yFactor:  0.1,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    }}>
        <img src="/logo192.png"/>
    </ParallaxMousemove.Layer>
    <ParallaxMousemove.Layer config={{
      xFactor:  0.05,
      yFactor:  0.1,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    }}>
        <img src="/logo192.png"/>
    </ParallaxMousemove.Layer>
</ParallaxMousemove>
    </div>)
}