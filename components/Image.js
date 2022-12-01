import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  const imageURL = rest.src
  console.log(typeof imageURL)
  return <NextImage src={imageURL} width={500} height={1000} alt={'test'} />
}

export default Image
