import React, { Fragment } from 'react';

import HomeSectionGrid from './HomeSectionGrid';
import gridImg1 from '../../../assets/webp/buddha-meditating.e8edacd1.webp';
import gridImg2 from '../../../assets/webp/candle.e901d3d3.webp';
import gridImg3 from '../../../assets/webp/flower-of-life.43296c5e.webp';
import gridImg4 from '../../../assets/webp/foggy-lake-china.7734aa79.webp';
import gridImg5 from '../../../assets/webp/balance.d077c22c.webp';
import gridImg6 from '../../../assets/webp/stick-smoking.deda454f.webp';

const GridSection = () => {
   return (
      <Fragment>
         <div className='sec-header m-txt'>
            <h4 className='color-header-txt cap-txt sm-space'>
               heal din kropp få tilbake din styrke
            </h4>
            <h1 className='cap-txt color-header-txt sm-space'>
               vi kan hjelpe deg med å utforske ditt sinnstilstand, som du
               kanskje har latt være uutforsket.
            </h1>
         </div>
         <div className='sec-grid'>
            <HomeSectionGrid
               gridImg={gridImg1}
               gridImgFileName={`buddha-meditating`}
               gridCardHeaderTitle={`Selv Realisering`}
               gridCardQuote={`mediter, fokuser, og finn ditt potensial`}
            />
            <HomeSectionGrid
               gridImg={gridImg2}
               gridImgFileName={`candle`}
               gridCardHeaderTitle={`vårt energisenter`}
               gridCardQuote={`din kropp er hoved kilden for vår energi. ta godt vare på den.`}
            />
            <HomeSectionGrid
               gridImg={gridImg3}
               gridImgFileName={`flower-of-life`}
               gridCardHeaderTitle={`lykken i livet`}
               gridCardQuote={`gjør det beste ut av livet ditt, og lev hvert øyeblikk av det.`}
            />
            <HomeSectionGrid
               gridImg={gridImg4}
               gridImgFileName={`foggy-lake`}
               gridCardHeaderTitle={`kjærlighet til naturen`}
               gridCardQuote={`få kontakt med naturen på en måte du aldri før har vært.`}
            />
            <HomeSectionGrid
               gridImg={gridImg5}
               gridImgFileName={`balance`}
               gridCardHeaderTitle={`vær åpen for endringer`}
               gridCardQuote={`forbedre dine uvaner, og oppdag at enderingene gir deg et bedre liv.`}
            />
            <HomeSectionGrid
               gridImg={gridImg6}
               gridImgFileName={`stick-smoking`}
               gridCardHeaderTitle={`vidreformidle kjærlighet og fred`}
               gridCardQuote={`gjør det beste ut av livet ditt og lev hvert øyeblikk av det.`}
            />
         </div>
      </Fragment>
   );
};

export default GridSection;
