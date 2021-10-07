import styled from "styled-components";

const BaseText = styled.div`
	font-size: ${(props) =>
		props.xs
			? "12px"
			: props.s
			? "14px"
			: props.m
			? "16px"
			: props.l
			? "20px"
			: props.xl
			? "24px"
			: "20px"};

	font-weight: ${(props) =>
		props.light ? "300" : props.semib ? "600" : props.bold ? "700" : "400"};

	@media (max-width: 768px) {
		font-size: ${(props) =>
			props.xs
				? "10px"
				: props.s
				? "12px"
				: props.m
				? "14px"
				: props.l
				? "16px"
				: props.xl
				? "20px"
				: "16px"};
	}
`;

const Text = (props) => {
	return (
		<BaseText
			xs={props.xs}
			s={props.s}
			m={props.m}
			l={props.l}
			xl={props.xl}
			semib={props.semib}
			bold={props.bold}
		>
			{props.children}
		</BaseText>
	);
};

export default Text;
