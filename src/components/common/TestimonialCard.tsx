import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import type {TestimonialCardProps} from "@/types";
import { Button } from "@/components/ui/button";


function TestimonialCard({testimonial, index, expanded, setExpanded}: TestimonialCardProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			whileInView={{opacity: 1, y: 0}}
			viewport={{once: true, amount: 0.3}}
			transition={{duration: 0.5, delay: index * 0.1}}
			whileHover={{y: -5}}
			className="h-full"
		>
			<Card
				className="bg-card/80 backdrop-blur-sm w-full max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center font-serif text-lg text-muted-foreground flex-1 flex flex-col justify-between h-full border border-border/50">
				<div>
					<div className="flex justify-center mb-4">
						{[...Array(5)].map((_, idx) => (
							<FaStar
								key={idx}
								className="text-yellow-500 drop-shadow-lg text-xl h-6 w-6 mx-0.5"
							/>
						))}
					</div>
					<blockquote className="block">
            <span
	            className={
		            expanded === index ? "" : "line-clamp-3 block transition-all duration-200"
	            }
	            style={
		            expanded === index
			            ? {}
			            : {
				            display: "-webkit-box",
				            WebkitLineClamp: 3,
				            WebkitBoxOrient: "vertical",
				            overflow: "hidden",
			            }
	            }
            >
              "{testimonial.text}"
            </span>
						{testimonial.text.length > 120 && (
							<Button
								variant="link"
								className="text-xs text-primary/80 inline-block underline mt-2 p-0 h-auto"
								onClick={() => setExpanded(expanded === index ? null : index)}
							>
								{expanded === index ? "Show less" : "Read more"}
							</Button>
						)}
					</blockquote>
				</div>
				<div className="mt-4 pt-4 border-t border-border/30">
          <span className="block text-sm text-primary font-bold">
            — {testimonial.name}
          </span>
				</div>
			</Card>
		</motion.div>
	);
}

export default TestimonialCard;