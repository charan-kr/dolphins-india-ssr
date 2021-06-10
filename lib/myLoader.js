export default function myLoader({ src, width, quality }) {
  return `${process.env.SERVER}${src}?w=${width}&q=${quality || 75}`;
}
