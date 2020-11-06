import React from 'react';
import ReactDOM from 'react-dom';
import 'react-google-photo/styles.css';
import GooglePhoto from 'react-google-photo';

const App = () => {
  const [open, setOpen] = React.useState(false);

const images = [
    {
      src:
        'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      width: 1500,
      height: 1000,
    },
    ...
  ];

  return (
    <div>
      <button onClick={this.handleOpen}>Open</button>
      <GooglePhoto
        open={open}
        src={images}
        onClose={this.handleClose}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
