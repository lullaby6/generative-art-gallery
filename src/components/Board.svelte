<script lang="ts">
	import P5Sketch, { type Sketch } from "@sveltecraft/p5-svelte";

	const width = window.innerWidth;
	const height = window.innerHeight;

	const cellSize = 30;
	const cellPadding = 5;
	const interval = 1000;

	const sketch: Sketch = (p) => {
		p.setup = () => {
			p.createCanvas(width, height);
			p.background(255);

			for (let i = 0; i < width; i += cellSize + cellPadding) {
				for (let j = 0; j < height; j += cellSize + cellPadding) {
					p.fill(p.random(0, 255));
					p.rect(i, j, cellSize);
				}
			}
		};

		let lastDraw = 0;

		p.draw = () => {
			p.background(255, 255, 255, 2);

			for (let i = 0; i < width; i += cellSize + cellPadding) {
				for (let j = 0; j < height; j += cellSize + cellPadding) {
					p.fill(255, 255, 255, 0);
					p.rect(i, j, cellSize);
				}
			}

			if (p.millis() - lastDraw > interval) {
				for (let i = 0; i < width; i += cellSize + cellPadding) {
					for (let j = 0; j < height; j += cellSize + cellPadding) {
						p.fill(p.random(0, 255));
						p.rect(i, j, cellSize);
					}
				}

				lastDraw = p.millis();
			}
		};
	};
</script>

<P5Sketch {sketch} />
