import Gallery from '../gallery/gallery.component';

import './tech-about.styles.scss';


const TechAbout = () => {
  return (
    <div>
      <div className='tech-about-container'>
        <div className='about-tech'>
          <p>
            <img
              src={require('../../assets/img/pexels-andrea-piacquadio-774909.jpeg')}
              alt=''
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            architecto perspiciatis unde cum porro nostrum. Ad, id ducimus
            itaque, quaerat esse sint in, saepe expedita quas neque placeat
            suscipit animi. Optio voluptas, perspiciatis recusandae esse non,
            officia quo aut maiores rerum nihil in assumenda eaque placeat
            vitae, beatae labore autem. Magnam eligendi repudiandae nihil qui et
            est nulla ipsam dicta? Laudantium facere error impedit eos
            blanditiis autem fugiat quibusdam, vel quos repellat in saepe et, ex
            dolore enim minus obcaecati. Et doloremque laboriosam, maxime
            perferendis distinctio voluptate iure! Consectetur, natus.
            Voluptatum nesciunt eum ipsam? Sint, illo, odio eaque maiores eius
            inventore quae magni necessitatibus laudantium voluptate autem
            explicabo mollitia aut quas ut cumque aliquam? Obcaecati
            voluptatibus ab commodi quidem voluptate. Ad, quae iure rerum
            similique quisquam adipisci animi aperiam esse, vitae corporis
            blanditiis? Neque quaerat pariatur, incidunt voluptatum ipsa hic
            velit eveniet beatae assumenda odit voluptate iusto molestiae?
            Aliquam, velit? Quibusdam alias similique tempora, nobis quasi
            eveniet amet perspiciatis, doloremque sed laboriosam ea assumenda
            dolore laudantium omnis maxime ex repudiandae nisi earum commodi
            iusto sint? Esse suscipit cum deserunt deleniti! Nobis minus ducimus
            eum optio nemo aliquam cupiditate beatae eveniet aut harum neque
            ipsa consequatur quae debitis illum maxime molestiae recusandae ad
            doloribus dolores, impedit unde laboriosam obcaecati excepturi!
            Doloremque!  
          </p>
        </div>
        <div className='tech-gallery'>
            <Gallery name='tech'/>
        </div>
      </div>
      <div className='tech-services'></div>
    </div>
  );
};

export default TechAbout;
