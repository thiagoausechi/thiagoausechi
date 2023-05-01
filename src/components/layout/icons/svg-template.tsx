import { SVGProps } from 'react'

const SvgTemplate = ({
  viewBox,
  children,
  ...rest
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} {...rest}>
    {children}
  </svg>
)

export default SvgTemplate
