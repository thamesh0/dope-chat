import React from "react";
import Img from "/src/assets/img.png";
import Attach from "/src/assets/attach.png";

export const MsgInput = () => {
	return (
		<div className='msg-input'>
			<input type='text' placeholder='Type something...' />
			<div className='send'>
				<img src={Img} alt='' />
				<input type='file' style={{ display: "none" }} id='attach-file' />
				<label htmlFor='attach-file'>
					<img src={Attach} alt='' />
				</label>
				<button>Send</button>
			</div>
		</div>
	);
};
