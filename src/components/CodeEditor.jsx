import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';


const BACKGROUND_COLOR = '#fff';
const LINE_HEIGHT = '20px';
const FONT_SIZE = '14px';

const defaultCssTheme = `
.editor {
  background: ${BACKGROUND_COLOR};
  color: #4f559c;
}

.editor .token.punctuation {
  color: #4a4a4a;
}

.editor .token.keyword {
  color: #8500ff;
}

.editor .token.operator {
  color: #ff5598;
}

.editor .token.string {
  color: #41ad8f;
}

.editor .token.comment {
  color: #9badb7;
}

.editor .token.function {
  color: #8500ff;
}

.editor .token.boolean {
  color: #8500ff;
}

.editor .token.number {
  color: #8500ff;
}

.editor .token.selector {
  color: #8500ff;
}

.editor .token.property {
  color: #8500ff;
}

.editor .token.tag {
  color: #8500ff;
}

.editor .token.attr-value {
  color: #8500ff;
}
`

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <style>{defaultCssTheme}</style>
      <h1>Code Editor</h1>
      <div style={{ position: 'relative', display: 'inline-block', width: '80%', textAlign: 'left' }}>
        <textarea
          className="editor"
          value={code}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '400px',
            fontFamily: 'monospace',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'transparent',
            color: 'transparent',
            caretColor: 'white', 
            border: '1px solid #ccc',
            padding: '10px',
            resize: 'none',
            outline: 'none',
            whiteSpace: 'pre-wrap',
            overflow: 'auto',
            zIndex: 1,
          }}
        />
        <pre
          className="editor"
          style={{
            pointerEvents: 'none',
            margin: 0,
            width: '100%',
            height: '400px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            overflow: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
            boxSizing: 'border-box',
            zIndex: 0,
          }}
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript', code, Prism.languages.python,'python',) }}
          
        />
      </div>
    </div>
  );
};

export default CodeEditor;
