import "./App.css";
import {useState} from "react";
import ReactQuill, {Quill} from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import QuillResize from 'quill-resize-module';
Quill.register('modules/resize', QuillResize);

function App() {
  const [value, setValue] = useState();

  const Editor = {
    modules: {
      toolbar: {
        container: [
          ['image'],
        ],
      },
      resize: {
        modules: ['Resize', 'DisplaySize', 'Toolbar'],

      }
    },
    formats: [
      'image',
      'width',
      'height',
    ],
  };
  return (
    <div>
      <ReactQuill
        modules={Editor.modules}
        formats={Editor.formats} theme="snow" value={value} onChange={(v) => {
          setValue(v);
        }} />


    </div>
  );
}

export default App;
