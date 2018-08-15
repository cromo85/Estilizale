<template>
	<div class="container">
		<h2 class="center-text">borders</h2>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">basic</h3>
				<div class="note definition">
					<p>La propiedad <strong>border</strong> nos permite crear un marco alrededor del elemento al que se le aplique dicha propiedad (div, p, img, etc).</p>
				</div>
				<div class="note important">
					<p><strong>Nota:</strong> Para que el borde se visualize se debe especificar la propiedad <strong>border-style</strong> (en este caso es solid), por default el color de borde es negro.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { <p>border: {{border}}px solid gray;</p>}</div>
					<div class="small-jump">equal to</div>
					<div>div {<p>border-style: solid;</p><p> border-width: {{border}}px;</p><p>border-color: gray;</p>}</div>
				</div>
				<div class="options margin-vertical">
					<p><label>border:</label> <input type="range" v-model="border" min="0" max="20"></p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="rectangle border-ds blue" :style="{'border-width':border+'px'}"></div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">border types</h3>
				<div class="note definition">
					<p>Por lo general, el tipo de borde más utilizado es <strong>solid</strong>, sin embargo existen otro tipo de estilos para bordes.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { border-style: {{tBorder}}; }</div>
				</div>
				<div class="options margin-vertical">
					<p><label>tipo de borde:</label>
						<select v-model="tBorder">
							<option value="solid">solid</option>
							<option value="dotted">dotted</option>
							<option value="dashed">dashed</option>
							<option value="double">double</option>
							<option value="groove">groove</option>
							<option value="ridge">ridge</option>
							<option value="inset">inset</option>
							<option value="outset">outset</option>
							<option value="none">none</option>
						</select>
					</p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="rectangle border-dw yellow" :style="{'border-style': tBorder}"></div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">individual sides</h3>
				<div class="note definition">
					<p>Cada lado del elemento HTML puede tener su propio estilo como lo muestra el ejemplo.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { border-style: solid dotted double dashed; }</div>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="rectangle border-dw border-ss green"></div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">rounded borders</h3>
				<div class="note important">
					<p><strong>Nota:</strong> Cada lado del borde se puede redondear individualmente. La propiedad <strong><em>border-radius</em></strong>, a diferencia de <em>border-width</em> no necesita tener definida la propiedad <em>border-style</em>, es decir, no es necesario definir un borde</p>
				</div>
				<div class="code margin-vertical">
					<div>div { border-radius: {{radius}}%; }</div>
				</div>
				<div class="options margin-vertical">
					<p><label>border radius:</label> <input type="range" v-model="radius" min="0" max="50"></p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="square border-dw border-ds flex-center" :style="{'border-radius':radius+'%'}"><span>with border</span></div>
				<div class="square flex-center" :style="{'border-radius':radius+'%'}"><span>whitout border</span></div>
			</div>
		</div>

	</div>
</template>

<script src="./border.js"></script>

<style src="./border.css" scope></style>