import React from 'react';
import { Card } from 'react-bootstrap';

const GenericCard = ({ title, content, img, style}) => {
  return (
    <Card style={style}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};


export default GenericCard;
// import React, { useState } from 'react';
// import { Card, Form, Button } from 'react-bootstrap';

// const GenericCard = ({ title, content, img, style }) => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   return (
//     <Card style={style}>
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{content}</Card.Text>
//         {img && <Card.Img variant="top" src={img} />}
//         <Form.Group controlId="formFile" className="mb-3">
//           {/* <Form.Control type="file" onChange={handleFileChange} /> */}
//         </Form.Group>
//         {selectedFile && (
//           <div>
//             <strong>Selected File:</strong> {selectedFile.name}
//           </div>
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default GenericCard;

