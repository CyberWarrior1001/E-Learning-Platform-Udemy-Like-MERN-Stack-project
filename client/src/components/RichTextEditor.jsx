import JoditEditor from 'jodit-react'
import React, { useRef } from 'react'

function RichTextEditor({input, setInput}) {
  const editor = useRef(null)
  // const [content, setContent] = useState('')
  const handleChange = (content) => {
    setInput({...input, description:content})
  }
  return (
    <div>
      <JoditEditor
      ref={editor}
      value={input.description}
      onChange={handleChange}
      />
      
    </div>
    
  )
}

export default RichTextEditor
