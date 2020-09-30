import React from 'react';

const MessageBox = (props) => {
console.log(props);

return (

<div class="ui message">
  <div class="header">
    {props.header}
  </div>
<p>{props.messege}</p>
</div>

);

};

export default MessageBox;