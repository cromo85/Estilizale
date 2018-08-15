<template>
	<div class="container">
		<h2 class="center-text">fonts & text</h2>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">fonts</h3>
				<div class="note margin-vertical">
				</div>
				<div class="code margin-vertical">
					<div>div {<p>font-size: {{(fontSize/10)}}px;</p><p>font-weight: {{fontWeight}};</p>}</div>
				</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>size</label>
						<input type="range" v-model="fontSize" min="50" max="550">
					</p>
					<p class="small-jump"><label>weigth</label>
						<select v-model="fontWeight">
							<option value="normal">normal</option>
							<option value="bold">bold</option>
						</select>
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="text-container center-align" :style="{'font-size':(fontSize/10)+'px','font-weight':fontWeight}">font size</div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">text</h3>
				<div class="note important">
					<p><strong>Nota:</strong> La alineación del texto se hace respecto al ancho del elemento (propiedad width), y no sobre el relleno (propiedad padding).</p>
				</div>
				<div class="code margin-vertical">
					<div>div {<p>text-align: {{tAlign}};</p><p>text-decoration: {{tDecoration}};</p><p>text-transform: {{tTransform}};</p>}</div>
				</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>text align</label>
						<select v-model="tAlign">
							<option value="left">left</option>
							<option value="center">center</option>
							<option value="right">right</option>
						</select>
					</p>
					<p class="small-jump"><label>decoration</label>
						<select v-model="tDecoration">
							<option value="none">none</option>
							<option value="overline">overline</option>
							<option value="line-through">line-through</option>
							<option value="underline">underline</option>
						</select>
					</p>
					<p class="small-jump"><label>transform</label>
						<select v-model="tTransform">
							<option value="uppercase">uppercase</option>
							<option value="lowercase">lowercase</option>
							<option value="capitalize">capitalize</option>
						</select>
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="text-container font-size docky" :style="{'text-align':tAlign,'text-decoration':tDecoration,'text-transform':tTransform}">text align</div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">letter spacing</h3>
				<div class="note definition">
					<p>Define el espacio entre cada letra, acepta valores negativos.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { letter-spacing: {{letterSpacing}}px; }</div>
				</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>spacing</label>
						<input type="range" v-model="letterSpacing" min="-2" max="10">
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="text-container center-align" :style="{'letter-spacing':letterSpacing+'px'}">lorem ipsum dolor sit</div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">line height</h3>
				<div class="note definition">
					<p>Si el texto de un elemento abarca más de una linea, podemos controlar la separación entre líneas con esta propiedad.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { line-height: {{(lineHeight/10)}}; }</div>
				</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>height</label>
						<input type="range" v-model="lineHeight" min="7" max="25">
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="text-container center-align" :style="{'line-height':(lineHeight/10)}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">word spacing</h3>
				<div class="note margin-vertical">
				</div>
				<div class="code margin-vertical">
					<div>div { word-spacing: {{(wordSpacing/10)}}px; }</div>
				</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>height</label>
						<input type="range" v-model="wordSpacing" min="-30" max="150">
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="text-container center-align" :style="{'word-spacing':(wordSpacing/10)+'px'}">Lorem ipsum dolor</div>
			</div>
		</div>
	</div>
</template>

<script src="./text.js"></script>

<style src="./text.css" scope></style>