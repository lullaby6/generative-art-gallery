<script lang="ts">
	import P5Sketch, { type Sketch } from "@sveltecraft/p5-svelte";

	const width = window.innerWidth;
	const height = window.innerHeight;

	const posVariation = 2.5;
	const sizeVariation = 5;

	let x = width / 2;
	let y = height / 2;
	const maxCircleSize = 500;
	let circleSize = maxCircleSize;
	let color = 255;

	const sketch: Sketch = (p) => {
		p.setup = () => {
			p.createCanvas(width, height);
			p.background(0);
			p.noStroke();
		};

		p.draw = () => {
			p.fill(color);

			p.circle(x, y, circleSize);

			circleSize -= p.random(0, sizeVariation);

			if (circleSize <= -maxCircleSize) circleSize = maxCircleSize;

			if (circleSize <= 0) {
				x += p.random(-posVariation, posVariation);
				y += p.random(-posVariation, posVariation);
				color += 1;
			} else {
				x -= p.random(-posVariation, posVariation);
				y -= p.random(-posVariation, posVariation);
				color -= 1;
			}
		};
	};
</script>

<P5Sketch {sketch} />
