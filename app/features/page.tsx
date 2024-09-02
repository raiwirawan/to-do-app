import {
	CardBody,
	CardContainer,
	CardHead,
	CardImage,
	CardText,
} from "@/components/Card";
import Container from "@/components/Container";

const features: Array<{
	id: number;
	img_src: string;
	img_alt: string;
	card_title: string;
	card_text: string;
}> = [
	{
		id: 1,
		img_src: "/vercel.svg",
		img_alt: "vercel-image",
		card_title: "The Vercel Functions",
		card_text: "this is the Vercel functions, I like how Vercel made Next.js",
	},
	{
		id: 2,
		img_src: "/next.svg",
		img_alt: "next-image",
		card_title: "The Next Framework",
		card_text: "Next is one of the best js front-end framework",
	},
	{
		id: 3,
		img_src: "/info-icon.svg",
		img_alt: "info-icon",
		card_title: "The Basic Info Icon",
		card_text: "this is only basic info icon",
	},
	{
		id: 4,
		img_src: "/vercel.svg",
		img_alt: "vercel-image",
		card_title: "The Vercel Functions",
		card_text: "this is the Vercel functions, I like how Vercel made Next.js",
	},
	{
		id: 5,
		img_src: "/next.svg",
		img_alt: "next-image",
		card_title: "The Next Framework",
		card_text: "Next is one of the best js front-end framework",
	},
	{
		id: 6,
		img_src: "/info-icon.svg",
		img_alt: "info-icon",
		card_title: "The Basic Info Icon",
		card_text: "this is only basic info icon",
	},
	{
		id: 7,
		img_src: "/vercel.svg",
		img_alt: "vercel-image",
		card_title: "The Vercel Functions",
		card_text: "this is the Vercel functions, I like how Vercel made Next.js",
	},
	{
		id: 8,
		img_src: "/next.svg",
		img_alt: "next-image",
		card_title: "The Next Framework",
		card_text: "Next is one of the best js front-end framework",
	},
	{
		id: 9,
		img_src: "/info-icon.svg",
		img_alt: "info-icon",
		card_title: "The Basic Info Icon",
		card_text: "this is only basic info icon",
	},
];

export default function Features() {
	return (
		<Container className="flex flex-row w-[4000px] h-[100vh] items-center justify-center">
			{features.map((feature) => {
				return (
					<CardContainer key={feature.id} className="rounded-[5rem] mr-[2rem]">
						<CardHead>
							<CardImage src={feature.img_src} alt={feature.img_alt} />
						</CardHead>
						<CardBody>
							<CardText title={feature.card_title}>
								{feature.card_text}
							</CardText>
						</CardBody>
					</CardContainer>
				);
			})}
		</Container>
	);
}
