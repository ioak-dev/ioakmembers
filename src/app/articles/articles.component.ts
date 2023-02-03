import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from './article.interface';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [{
    "title": "semper nostra viverra tellus class aenean litora cubilia lobortis dictumst leo vehicula dui ac",
    "thumbnail": "",
    "tags": ["lorem", "ipsum", "dolor"],
    "description": "taciti dis ipsum pharetra elitsuspendisse habitasse erat proin dis ad. aenean nunc placerat class eu nullam sodales laoreet class nostra facilisis duis. non vel posuere duis blandit amet blandit. ad id morbi posuere ultrices maecenas faucibus litora lobortis vitae vestibulum pulvinar venenatis consequat. dis adipiscing lorem nostra elitsuspendisse etiam imperdiet placerat curae magna. velit tristique sociosqu vel platea tortor massa leo hac dui integer. ante dictumst tristique porttitor nunc himenaeos amet pharetra vestibulum hendrerit a mattis blandit pulvinarin. enim lorem sem feugiat quam justo placerat feugiat ullamcorper ultricies commodo mi lorem",
    "author": {
      "img": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4ccfaae780ec3ee0ae295d_574936156263_760d72b6a2045d01ea7c_512-p-500.png",
      "name": "John Doe",
      "position": "Founder & CEO"
    }
  }, {
    "title": "musvestibulum cras dui laoreet pretium sit conubia varius vivamus sit erat consectetur nec leo",
    "thumbnail": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/63a5e22a533d3137f707734f_pixelmatters-architecture-%20Mobile-App.png",
    "tags": ["lorem", "ipsum", "dolor"],
    "description": "nec hendrerit justo nisi primis nulla ante augue malesuada. dignissim habitasse nisi laoreet fusce ex etiam cubilia ex malesuada maecenas massa. metus quisque nascetur ac vehicula interdum ornare luctus lobortis non sapien. inceptos aliquam elit luctus at a ad ornare ad curae orci mollis. pretium ullamcorper ullamcorper sagittis sodales arcu posuere neque conubia dictum quam. dis dictumst odio erat ut cubilia lacus parturient enim hendrerit",
    "author": {
      "img": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4ccfaa6ce9fe0fb78be80b_1052175119236_9961ebe32c2209d94d39_512-p-500.png",
      "name": "John Doe",
      "position": "Founder & CEO"
    }
  }, {
    "title": "mollis sed aenean ridiculus ad orci rutrumaliquam rutrumaliquam dictum metus purus montes dignissim et",
    "thumbnail": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/638a3194586b0f71cfedf607_pixelmatters-deisgn-feedback-process-p-500.png",
    "tags": ["lorem", "ipsum", "dolor"],
    "description": "massa orci sodales sodales vivamus scelerisque platea at habitasse risus. quam quisque lacus maecenas magna laoreet enim. pulvinarin elit platea litora sit dui dignissim pulvinarin pulvinarin porttitor ac luctus hac. taciti pulvinarin blandit tristique nullam vitae tincidunt sodales. cursus sagittis tempus taciti eu interdum vehicula turpis pulvinarin maecenas vel ridiculus blandit. vestibulum faucibus pellentesque quam nostra musvestibulum nulla suscipit pulvinar sociosqu. ullamcorper sodales euismod dolor consequat turpis dui. egestas vel massa scelerisque metus mauris cras etiam. curae quis praesent amet auctor scelerisque nibh",
    "author": {
      "img": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4ccfaa1f75ad30d468af3f_573336093776_96a5b8c77820148f4596_512.jpeg",
      "name": "John Doe",
      "position": "Founder & CEO"
    }
  }, {
    "title": "hendrerit ipsum elementum pellentesque dictum blandit non elit id mollis aenean elitsuspendisse",
    "thumbnail": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/636944bbc3ff1844921c4ca5_pixelmatters-migration-vue2-vue3-p-500.png",
    "tags": ["lorem", "ipsum", "dolor"],
    "description": "ante penatibus sodales vehicula conubia suscipit amet a justo ad orci tempus. imperdiet hac placerat facilisis dignissim maximus augue eleifend praesent ut ante sagittis maecenas montes. ornare porta sollicitudin placerat aptent accumsan convallis pharetra. penatibus penatibus a augue cursus ullamcorper lorem vehicula malesuada posuere quisque orci facilisis. sapien elitsuspendisse cursus fermentum mollis elitsuspendisse est adipiscing libero penatibus dui velit habitasse ac. inceptos dictum sapien quisque amet augue eleifend a velit. lacus sodales fusce blandit sagittis dignissim natoque molestie convallis cubilia at felis natoque",
    "author": {
      "img": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4ccdd846fac98b3bc5e396_573730411315_f0c8195b8f0e6aea20dc_512-p-500.png",
      "name": "John Doe",
      "position": "Founder & CEO"
    }
  }, {
    "title": "pulvinar cursus lacinia eleifend ad tristique nascetur ante vel velit per at dictum",
    "thumbnail": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/6332da11636703ee667501d5_pixelmatters-web3-product-design-learnings-journey-p-500.png",
    "tags": ["lorem", "ipsum", "dolor"],
    "description": "nec hendrerit justo nisi primis nulla ante augue malesuada. dignissim habitasse nisi laoreet fusce ex etiam cubilia ex malesuada maecenas massa. metus quisque nascetur ac vehicula interdum ornare luctus lobortis non sapien. inceptos aliquam elit luctus at a ad ornare ad curae orci mollis. pretium ullamcorper ullamcorper sagittis sodales arcu posuere neque conubia dictum quam. dis dictumst odio erat ut cubilia lacus parturient enim hendrerit",
    "author": {
      "img": "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/632344e75e4d5a844dc14324_miguel-leite-front-end-developer-pixelmatters-p-500.jpeg",
      "name": "John Doe",
      "position": "Founder & CEO"
    }
  }];

  featuredPost: any;
  currentDate = new Date();
  constructor(private router: Router, private articlesService: ArticlesService) {
    this.featuredPost = this.articles[0];
  }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToCreateArticle() {
    this.router.navigate([`/article/create`]);
  }
}
