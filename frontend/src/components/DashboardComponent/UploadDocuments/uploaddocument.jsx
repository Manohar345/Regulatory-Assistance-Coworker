import {Upload} from "lucide-react";
import "./uploaddocument.css";
function UploadDocument() {  
    return (
        <div className="upload-document-container">
            <div className="upload-document-header">
                <Upload size={24} strokeWidth={1.75} />
                <h2>Upload Document</h2>
            </div>
            <form className="upload-document-form" action="/upload" method="post" encType="multipart/form-data">
                <input type="file" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
export default UploadDocument;