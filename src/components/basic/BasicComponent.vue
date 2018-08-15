<template>
	<div class="container">
		<h2 class="center-text">the basics</h2>
		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">width & height</h3>
				<div class="note definition">
					<p>Con estas propiedades definimos el ancho y alto de nuestro elemento respectivamente. No necesariamente las medidas deben ser en <strong>px</strong>, pueden ser en <strong><em>em, rem, vh, vw, %(porcentaje)</em></strong>, entre otros.</p>
				</div>
				<div class="code margin-vertical">div {<p>width: {{width}}px;</p><p>height: {{height}}px;</p>}</div>
				<div class="options margin-vertical">
					<p class="small-jump"><label>width:</label> <input type="range" v-model="width" min="25" max="180"></p>
					<p class="small-jump"><label>height:</label> <input type="range" v-model="height" min="25" max="180"></p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div :style="{'width':width+'px','height':height+'px','background-color':'#B53471'}"></div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">margin</h3>
				<div class="note definition">
					<p>Esta propiedad no altera el tamaño del elemento HTML pero si el tamaño de espacio que abarca, generalmente se utiliza para separar un elemento de otros.</p>
				</div>
				<div class="note important">
					<p><strong>Nota:</strong> El ejemplo presente busca mostrar cómo se comporta la propiedad <strong>margin</strong> haciendo uso de otras propiedades.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { margin: {{margin}}px; }</div>
					<div class="small-jump">equal to</div>
					<div>div { margin: {{margin}}px {{margin}}px {{margin}}px {{margin}}px; }</div>
				</div>
				<div class="options margin-vertical"><p><label>margin:</label> <input type="range" v-model="margin" min="0" max="20"></p>
				</div>
			</div>
			<div class="row-container flex-center">
				<div>
					<div class="cube extra"></div>
				</div>
				<div class="cubes flex-center">
					<div class="cube extra"></div>
					<div class="cube principal" v-bind:style="{'margin':margin+'px'}"></div>
					<div class="cube extra"></div>
				</div>
				<div>
					<div class="cube extra"></div>
				</div>
			</div>
		</div>
		<div class="separator"></div>
		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">margin to width & to height</h3>
				<div class="note definition">
					<p>El margen puede ser aplicado por separado a lo alto y ancho e inclusive a un solo lado del elemento, esto con las propiedades <strong><em>margin-top, margin-right, margin-bottom y margin-left</em></strong> según se requiera. Funciona de igual manera para la propiedad <strong>padding</strong></p>
				</div>
				<div class="code margin-vertical">
					<div>div { margin: {{mHeight}}px {{mWidth}}px; }</div>
				</div>
				<div class="options margin-vertical"><p class="small-jump"><label>width:</label> <input type="range" v-model="mWidth" min="0" max="60"></p>
				<p class="small-jump"><label>height:</label> <input type="range" v-model="mHeight" min="0" max="20"></p>
				</div>
			</div>
			<div class="row-container flex-center">
				<div>
					<div class="cube extra"></div>
				</div>
				<div class="cubes flex-center">
					<div class="cube extra"></div>
					<div class="cube principal" v-bind:style="{'margin': mHeight+'px '+mWidth+'px'}"></div>
					<div class="cube extra"></div>
				</div>
				<div>
					<div class="cube extra"></div>
				</div>
			</div>
		</div>

		<div class="separator"></div>

		<div class="lesson-container">
			<div class="description-container">
				<h3 class="center-text">padding</h3>
				<div class="note definition">
					<p>Esta propiedad altera el tamaño del elemento HTML agregando relleno alrededor del elemnto.</p>
				</div>
				<div class="code margin-vertical">
					<div>div { padding: {{padding}}px; }</div>
					<div class="small-jump">equal to</div>
					<div>div { padding: {{padding}}px {{padding}}px {{padding}}px {{padding}}px; }</div>
				</div>
				<div class="options margin-vertical">
					<p><label>padding:</label> <input type="range" v-model="padding" min="0" max="50"></p>
				</div>
			</div>
			<div class="example-container flex-center">
				<div class="txt-container" :style="{'padding':padding+'px'}"><strong>padding</strong></div>
			</div>
		</div>
	</div>
</template>

<script src="./basic.js"></script>
<style src="./basic.css" scope></style>