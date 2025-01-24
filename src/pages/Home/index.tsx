import { Section } from './styles'
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"

export function Home() {
  return (
    <Section>
      <img src={img1} alt="IMG na esquerda" />
      <img src={img2} alt="IMG na direita" />
      <img src={img3} alt="IMG em baixo" />
    </Section>
  )
}
