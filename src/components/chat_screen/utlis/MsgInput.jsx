import React from "react";
import Img from "/src/assets/img.png";
import Attach from "/src/assets/attach.png";
import styled from "styled-components";

const HiddenLabel = styled.label`
	display: none;
`;

export const MsgInput = () => {
	return (
		<div className='msg-input'>
			<input type='text' placeholder='Type something...' />
			<div className='send'>
				<img src={Attach} alt='' />
				<input type='file' style={{ display: "none" }} id='attach-file' />
				<HiddenLabel htmlFor='attach-file'></HiddenLabel>
				<img src={Img} alt='' />
				<button>Send</button>
			</div>
		</div>
	);
};
