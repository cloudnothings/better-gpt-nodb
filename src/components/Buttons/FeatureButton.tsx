'use client';

const FeatureButton = (props: {
  featureName: string,
  icon: React.ElementType, color: string, onClick: () => void
}) => {
  return (
    <button className={classNames(props.color, "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm shadow-md text-white transition-all group space-x-2")}
      onClick={props.onClick}>
      <props.icon className="h-5 w-5" />
      <span>{props?.featureName}</span></button>
  )
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default FeatureButton