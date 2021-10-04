import React,{useState,useRef} from 'react';

const Test = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const FileUploader = ({onFileSelect}) => {
        const fileInput = useRef(null)

        const handleFileInput = (e) => {
            // handle validations
            onFileSelect(e.target.files[0])
        }
    }


        return (
            <>
                <form>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="file"
                        value={selectedFile}
                        onChange={handleFileInput}
                    />
                </form>

            </>
        );
    };

export default Test;