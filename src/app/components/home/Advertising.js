import image1 from '../../images/layerslider/image-1.jpg';
import image1Blur from '../../images/layerslider/image-1-blur2.jpg';
import image2 from '../../images/layerslider/image-2.jpg';
import image3 from '../../images/layerslider/image-3.jpg';
import React from 'react';
// require('../../styles/lay')
const styles = {
  wrapper: {
    paddingTop: 20,
  },
	main: {
		paddingTop: 20,
		width: 1160,
		// width: 'fill-available',
		// width: 'intrinsic', /* Safari/WebKit uses a non-standard name */
		// width: '-moz-max-content', /* Firefox/Gecko */
		// width: '-webkit-max-content',
    // width: '100%',
    // width: 700,
		height: 600,
		background: 'white',
	},
	bgBlur: {
		top: '90%',
		left: '50%',
	},
	getStyles: () => {
		return {
			top: '89%',
			fontWeight: 300,
			fontSize: 60,
			color: 'rgb(86, 204, 225)',
			whiteSpace: 'nowrap',
			left: '10%',
		};
	},
	getPlus: () => {
		return {
			left: 50,
			fontWeight: 'normal',
			textAlign: 'center',
			width: 30,
			height: 30,
			fontSize: 30,
			lineHeight: '30px',
			color: 'white',
			background: '#2196F3',
			borderRadius: 100,
			whiteSpace: 'nowrap',
		};
	},
};

styles['slideA']          = {we: styles.getStyles()};
styles.slideA['care']     = styles.getStyles();
styles.slideA['about']    = styles.getStyles();
styles.slideA['every']    = styles.getStyles();
styles.slideA['patient']  = styles.getStyles();

styles.slideA.we.left       = '10%';
styles.slideA.care.left     = '24%';
styles.slideA.about.left    = '43%';
styles.slideA.every.left    = '64%';
styles.slideA.patient.left  = '85%';

styles.slideA.we.color      = 'rgb(86, 204, 225)';
styles.slideA.care.color    = 'rgb(86, 204, 225)';
styles.slideA.about.color   = 'rgb(44, 191, 217)';
styles.slideA.every.color   = 'rgb(44, 166, 217)';
styles.slideA.patient.color = 'rgb(27, 144, 218)';

styles.slideA['spectrum'] = {
	top: '88%', 
	left: '50%', 
	textAlign: 'center', 
	whiteSpace: 'nowrap', 
	fontSize: 55, 
	fontWeight: 300, 
	color: 'rgb(27, 144, 218)',
};

styles.slideA['hours'] = {
	top: '89%', 
	left: '50%', 
	textAlign: 'center', 
	whiteSpace: 'nowrap', 
	fontSize: 55, 
	fontWeight: 300, 
	color: 'rgb(27, 144, 218)',
};

styles['slideB'] = {
	fullSpectrum: {
		top: 70, 
		left: 75, 
		fontWeight: 300, 
		height: 40, 
		fontSize: 35, 
		lineHeight: '39px', 
		color: '#ffffff', 
		background: '#1E88E5', 
		borderRadius: 2, 
		paddingLeft: 20, 
		paddingRight: 20, 
		whiteSpace: 'nowrap'
	},
	treatment: {
		top: 110, 
		left: 100, 
		fontSize: 32, 
		color: '#2979FF', 
		whiteSpace: 'nowrap'
	},
	counseling: {
		top: 190, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	clinic: {
		top: 250, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	pediatric: {
		top: 310, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	gynecological: {
		top: 370, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	lab: {
		top: 430, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	diag: {
		top: 490, 
		left: 100, 
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	pluses: []
};

for (var i = 0; i <= 5; i++) {
	var plus = styles.getPlus()
	switch (i) {
		case 0: plus.top = 195; break;
		case 1: plus.top = 255; break;
		case 2: plus.top = 315; break;
		case 3: plus.top = 375; break;
		case 4: plus.top = 435; break;
		case 5: plus.top = 495; break;
	}
	styles.slideB['pluses'].push(plus)
}

// for (var i = 0; i <= 5; i++) console.log(i + ": " + styles.slideB.pluses[i].top)

{/*<img className="ls-layer" alt="Slide background blur" style={styles.bgBlur} src='https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Flayerslider%2Fimage-1-blur2.jpg?alt=media&token=f1014327-8c89-4cea-a722-d3b07aa016b4' data-ls="offsetxin:0; delayin:0000; durationin:2000" />*/}

export default () => (
  <div id="slider-wrapper" style={styles.wrapper}>

    <div id="layerslider" style={styles.main}>
      <div className="ls-slide" data-ls="slidedelay:23000; transition2d: 15-18, 59-61, 90, 91, 30-32, 69-72, 40-43, 92, 96, 97, 75-79, 81, 82, 86, 87-89, 93-95, 111, 103-105, 109, 112">
        <img className="ls-bg" alt="Slide background" src={image1} />
        <img className="ls-layer" alt="Slide background blur" style={styles.bgBlur} src={image1Blur} data-ls="offsetxin:0; delayin:0000; durationin:2000" />
        <h2 className="ls-l" style={styles.slideA.we}       data-ls="delayin: 0500; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetyout:0; durationout:2000; showuntil:4000;">WE</h2>
        <h2 className="ls-l" style={styles.slideA.care}     data-ls="delayin: 0900; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:2000; showuntil:4000;">CARE</h2>
        <h2 className="ls-l" style={styles.slideA.about}    data-ls="delayin: 1300; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:2000; showuntil:4000;">ABOUT</h2>
        <h2 className="ls-l" style={styles.slideA.every}    data-ls="delayin: 1700; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:2000; showuntil:4000;">EVERY</h2>
        <h2 className="ls-l" style={styles.slideA.patient}  data-ls="delayin:2100; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:2000; showuntil:4000;">PATIENT</h2>
        <p className="ls-l" style={styles.slideA.spectrum} 	data-ls="delayin: 10000; offsetxin:0; offsetyin:10; durationin:2000; showuntil:4000; offsetxout:0; offsetyout:-10; durationout:2000; transition2d:all;">A wide spectrum of quality medical services<br/>and treatment for all age groups</p>
        <p className="ls-l" style={styles.slideA.hours} 	data-ls="delayin:17500; offsetxin:0; offsetyin:10; durationin:2000; showuntil:3000; offsetxout:0; offsetyout:0; durationout:2000;">Monday &ndash; Friday: 10 am &ndash; 8 pm</p>
      </div>


      {/* 11000 30-32, 69-72 */}
      <div className="ls-slide" data-ls="slidedelay:11000;
        transition2d: 15-18, 59-61, 90, 91, 30-32, 69-72, 40-43, 92, 96,
        97, 75-79, 81, 82, 86, 87-89, 93-95, 111, 103-105, 109, 112"
      >
        <img className="ls-bg" src={image2} alt="Slide background" />
        <p className="ls-l" style={styles.slideB.fullSpectrum}
          data-ls="offsetxin:0; durationin:2000; delayin:500; easingin:easeOutElastic;
            rotatexin:-90; transformoriginin:50% top 0; offsetxout:-200; durationout:1000;"
        >Full Spectrum</p>

        <p className="ls-l" style={styles.slideB.treatment}
          data-ls="offsetxin:0; durationin:2000; delayin:1000; easingin:easeOutElastic;
            rotatexin:90; transformoriginin:50% top 0; offsetxout:-400;"
        >t r e a t m e n t</p>

        <h5 className="ls-l" style={styles.slideB.counseling} 	 data-ls="offsetxin:0; delayin:2000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Counseling</h5>
        <h5 className="ls-l" style={styles.slideB.clinic} 		 data-ls="offsetxin:0; delayin:2500; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Cardiac Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.pediatric} 	 data-ls="offsetxin:0; delayin:3000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Pediatric Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.gynecological} data-ls="offsetxin:0; delayin:3500; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Gynecological Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.lab} 			 data-ls="offsetxin:0; delayin:4000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Laboratory Analysis</h5>

        <h5 className="ls-l" style={styles.slideB.pluses[0]} data-ls="offsetxin:0; durationin:750; delayin:1800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;">+</h5>
        <h5 className="ls-l" style={styles.slideB.pluses[1]} data-ls="offsetxin:0; durationin:750; delayin:2300; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;">+</h5>
        <h5 className="ls-l" style={styles.slideB.pluses[2]} data-ls="offsetxin:0; durationin:750; delayin:2800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;">+</h5>
        <h5 className="ls-l" style={styles.slideB.pluses[3]} data-ls="offsetxin:0; durationin:750; delayin:3300; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;">+</h5>
        <h5 className="ls-l" style={styles.slideB.pluses[4]} data-ls="offsetxin:0; durationin:750; delayin:3800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;">+</h5>
      </div>


      {/* 10500 40-43, 92, 96, 97 */}
      <div className="ls-slide" data-ls="slidedelay:10500;
        transition2d: 15-18, 59-61, 90, 91, 30-32, 69-72, 40-43, 92, 96,
          97, 75-79, 81, 82, 86, 87-89, 93-95, 111, 103-105, 109, 112"
      >
        <img className="ls-bg" src={image3} alt="Slide background" />

        <h4 className="ls-l" style={{ top: 100, left: 125, whiteSpace: 'nowrap',
          fontSize: 70, fontWeight: 'normal', color: '#F50057' }}
          data-ls="offsetxin:0; offsetyin:top; durationin:3000; delayin:300;
          easingin:easeOutElastic; fadein:false; offsetxout:left; durationout:1500;
          showuntil:5400; easingout:easeInBack; fadeout:false;"
        >Playful</h4>

        <h3 className="ls-l" style={{ top: 175, left: 120, whiteSpace: 'nowrap',
          fontSize: 100, fontWeight: 'normal', color: '#FF5722' }}
          data-ls="offsetxin:0; offsetyin:top; durationin:3000; delayin:200;
            easingin:easeOutElastic; fadein:false; offsetxout:left;
            durationout:1500; showuntil:5950; easingout:easeInBack; fadeout:false;"
        >Pediatric</h3>

        <h4 className="ls-l"
          data-ls="
            offsetxin: 0;
            offsetyin: top;
            durationin: 3000;
            delayin: 100;
            easingin: easeOutElastic;
            fadein: false;
            offsetxout: left;
            durationout: 1500;
            showuntil: 5250;
            easingout: easeInBack;
            fadeout: false;
          "
          style={{
            top: 290,
            left: 390,
            whiteSpace: 'nowrap',
            fontSize: 70,
            fontWeight: 'normal',
            color: '#F50057'
        }}>Care</h4>

        <h5 className="ls-l"

          data-ls="offsetxin: -100;
               offsetxout: 0;
               offsetyin: 0;
               offsetyout: bottom;
               durationin: 2500;
               delayin: 2000;
               skewxin: 60;"

          style={{top: 450,
              left: 125,
              fontSize: 30,
              color: '#FF3D00'}}

        >When medical treatment is fun :)</h5>

        {/* 75-79, 81, 82, 86, 87-89, 93-95, 111, 103-105, 109, 112
        3d: 19, 20, 22, 23, 26, 62 63, 68, 69, 76 */}
      </div>
    </div>

  </div>
);