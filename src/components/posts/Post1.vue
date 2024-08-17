<template>
  <div class="blog-container">
    <div class="content" ref="content">
      <h1 id="title">The Amazing World of Coding</h1>
      <h2 id="intro">Introduction</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda distinctio, illo rerum totam corporis voluptas ea enim recusandae nemo ducimus error veritatis quos vel earum voluptates aliquam id explicabo placeat sunt cum fugit similique, adipisci maxime ut? Temporibus ad earum atque, amet veritatis voluptate, minima quos totam consequuntur quas dicta commodi, obcaecati expedita et quis reprehenderit fugit sed vel maxime rerum alias dolore voluptas. Obcaecati repellendus consequatur ducimus maiores, laborum a sequi, ipsam ea distinctio ex omnis nihil. Ad non perspiciatis tempore consectetur eius corrupti, ea, laudantium odio facere beatae rerum enim quisquam quos cum distinctio vitae sequi, eligendi minima?</p>
      <h2 id="history">A Brief History of Programming</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda distinctio, illo rerum totam corporis voluptas ea enim recusandae nemo ducimus error veritatis quos vel earum voluptates aliquam id explicabo placeat sunt cum fugit similique, adipisci maxime ut? Temporibus ad earum atque, amet veritatis voluptate, minima quos totam consequuntur quas dicta commodi, obcaecati expedita et quis reprehenderit fugit sed vel maxime rerum alias dolore voluptas. Obcaecati repellendus consequatur ducimus maiores, laborum a sequi, ipsam ea distinctio ex omnis nihil. Ad non perspiciatis tempore consectetur eius corrupti, ea, laudantium odio facere beatae rerum enim quisquam quos cum distinctio vitae sequi, eligendi minima?</p>
      <figure>
        <img :src="cherryBlossomImg" alt="Description of image" />
        <figcaption>Figure 1: This is the image caption</figcaption>
      </figure>
      <h2 id="modern">Modern Programming Languages</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda distinctio, illo rerum totam corporis voluptas ea enim recusandae nemo ducimus error veritatis quos vel earum voluptates aliquam id explicabo placeat sunt cum fugit similique, adipisci maxime ut? Temporibus ad earum atque, amet veritatis voluptate, minima quos totam consequuntur quas dicta commodi, obcaecati expedita et quis reprehenderit fugit sed vel maxime rerum alias dolore voluptas. Obcaecati repellendus consequatur ducimus maiores, laborum a sequi, ipsam ea distinctio ex omnis nihil. Ad non perspiciatis tempore consectetur eius corrupti, ea, laudantium odio facere beatae rerum enim quisquam quos cum distinctio vitae sequi, eligendi minima?</p>
      <h2 id="future">The Future of Coding</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda distinctio, illo rerum totam corporis voluptas ea enim recusandae nemo ducimus error veritatis quos vel earum voluptates aliquam id explicabo placeat sunt cum fugit similique, adipisci maxime ut? Temporibus ad earum atque, amet veritatis voluptate, minima quos totam consequuntur quas dicta commodi, obcaecati expedita et quis reprehenderit fugit sed vel maxime rerum alias dolore voluptas. Obcaecati repellendus consequatur ducimus maiores, laborum a sequi, ipsam ea distinctio ex omnis nihil. Ad non perspiciatis tempore consectetur eius corrupti, ea, laudantium odio facere beatae rerum enim quisquam quos cum distinctio vitae sequi, eligendi minima?</p>
      <figure>
        <img :src="yourNameImg" alt="Description of image" />
        <figcaption>Figure 2: This is the image caption</figcaption>
      </figure>
      <h2 id="conclusion">Conclusion</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda distinctio, illo rerum totam corporis voluptas ea enim recusandae nemo ducimus error veritatis quos vel earum voluptates aliquam id explicabo placeat sunt cum fugit similique, adipisci maxime ut? Temporibus ad earum atque, amet veritatis voluptate, minima quos totam consequuntur quas dicta commodi, obcaecati expedita et quis reprehenderit fugit sed vel maxime rerum alias dolore voluptas. Obcaecati repellendus consequatur ducimus maiores, laborum a sequi, ipsam ea distinctio ex omnis nihil. Ad non perspiciatis tempore consectetur eius corrupti, ea, laudantium odio facere beatae rerum enim quisquam quos cum distinctio vitae sequi, eligendi minima?</p>
    </div>
    <div class="toc" ref="toc">
      <h3>Table of Contents</h3>
      <ul>
        <li v-for="(item, index) in tocItems" :key="index">
          <a :href="item.href" @click.prevent="scrollTo(item.href)">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cherryBlossomImg from '@/assets/images/cherry-blossom.jpg'
import yourNameImg from '@/assets/images/your-name.jpeg'
import { ref, onMounted } from 'vue'

export default {
  name: 'Post1',
  setup() {
    const tocItems = ref([])

    const generateTOC = () => {
      const headers = document.querySelectorAll('.content h1, .content h2')
      tocItems.value = Array.from(headers).map(header => ({
        text: header.innerText,
        href: `#${header.id}`
      }))
    }

    function scrollTo(selector) {
      const selectorEl = document.querySelector(selector);
      if (selectorEl) {
        const offset = 200;
        const top = selectorEl.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      } else {
         const top = 0;
        window.scrollTo({
            top
        });
      }
    }

    onMounted(() => {
      generateTOC()
    })

    return { scrollTo, tocItems, cherryBlossomImg, yourNameImg };
  }
}
</script>

<style scoped>
.blog-container {
  display: flex;
  max-width: 1400px;
  padding: 0 5vw;
  margin-top: 79px;
}

.content {
  flex: 4;
  padding: 50px 20px 50px 0;
  border-right: 2px solid #ddd;
}

.toc {
  flex: 1;
  position: sticky;
  top: 135px;
  height: fit-content;
  padding-left: 20px;
  overflow-y: auto;
}

.toc h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.toc ul {
  list-style: none;
  padding: 0;
}

.toc li {
  margin-bottom: 10px;
}

.toc a {
  text-decoration: none;
  color: #007BFF;
}

.toc a:hover {
  text-decoration: underline;
}

.content h1, .content h2, .content p {
  margin-bottom: 20px;
}

.content h1 {
  font-size: 2.5em;
  color: #333;
  position: relative;
}

.content h2 {
  font-size: 2em;
  color: #555;
  position: relative;
}

.content p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
}

figure {
  margin: 20px 0 20px;
  text-align: center;
}

figure img {
  max-width: 60%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

figure figcaption {
  margin-top: 10px;
  font-size: 1.2em;
  color: #777;
}

@media (max-width: 1024px) {
    figure img {
        max-width: 80%;
    }
}

@media (max-width: 768px) {
  .blog-container {
    padding: 0;
  }
  .content {
    border: none;
    padding: 5vh 3vw 2vh;
  }

  .toc {
    display: none;
  }

  figure img {
    max-width: 100%;
  }
}
</style>
