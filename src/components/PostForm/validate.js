export default const validate = values => {
  const errors = {}
  if (!values.get('title')) {
    errors.title = '此處必填'
  }
}
