import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardInterface {
	children: React.ReactNode;
	className?: string;
	props?: any;
}

interface CardImage {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	props?: any;
	imgClass?: string;
	imgContainerClass?: string;
}

interface CardText {
	children: React.ReactNode;
	className?: string;
	titleClassName?: string;
	title?: string;
}

function CardContainer({ children, className, props }: CardInterface) {
	return (
		<div
			className={cn(
				"card-container overflow-hidden border-[2px] border-[#ffffff] w-[25rem] h-[30rem] rounded-2xl flex items-center justify-center flex-col",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

function CardHead({ children, className, props }: CardInterface) {
	return (
		<div
			className={cn(
				"card-head p-10 w-full h-[50%] bg-white flex items-center",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

function CardBody({ children, className, props }: CardInterface) {
	return (
		<div className={cn("card-body p-10 w-full h-[50%]", className)} {...props}>
			{children}
		</div>
	);
}

function CardImage({
	src,
	alt,
	width,
	height,
	imgClass,
	imgContainerClass,
	props,
}: CardImage) {
	return (
		<div className={cn("card-image", imgContainerClass)}>
			<Image
				className={cn("", imgClass)}
				width={width !== undefined ? width : 100}
				height={height !== undefined ? height : 100}
				src={src}
				alt={alt}
				{...props}
			/>
		</div>
	);
}

function CardText({ children, className, titleClassName, title }: CardText) {
	return (
		<div className={cn("card-text", className)}>
			{title !== undefined ? (
				<h2
					className={cn("card-text-title font-bold text-2xl", titleClassName)}
				>
					{title}
				</h2>
			) : (
				""
			)}
			{children}
		</div>
	);
}

export { CardContainer, CardHead, CardBody, CardImage, CardText };
