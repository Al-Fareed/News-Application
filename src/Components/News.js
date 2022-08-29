import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
    "source": {
        "id": "null",
        "name": "NBCSports.com"
        },
        "author": "Mike Florio",
        "title": "Tom Brady claims he was never going to play for anyone but the Buccaneers - NBC Sports",
        "description": "Tom Brady unexpectedly opted to meet with reporters after his one-drive preseason cameo in Saturday night’s game against the Colts. During his brief remarks, he addressed one of the various elephants herding the room.“I read all these different stories about …",
        "url": "https://profootballtalk.nbcsports.com/2022/08/28/tom-brady-claims-he-was-never-going-to-play-for-anyone-but-the-buccaneers/",
        "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/08/USATSI_18942827-e1661660979787.jpg",
        "publishedAt": "2022-08-28T04:35:00Z",
        "content": "Tom Brady unexpectedly opted to meet with reporters after his one-drive preseason cameo in Saturday nights game against the Colts. During his brief remarks, he addressed one of the various elephants … [+2745 chars]"
        },
        {
    "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "Eric Tucker",
        "title": "Judge plans to appoint special master in Trump records case - The Associated Press - en Español",
        "description": "WASHINGTON (AP) — A federal judge in Florida told the Justice Department on Saturday to provide her with more specific information about the classified records removed from former President Donald Trump's Florida estate  and said it was her “preliminary inten…",
        "url": "https://apnews.com/article/florida-government-and-politics-1cc6c63010da10a19fb8cfc8595ffe38",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/e4151ea22cb94ea088f7df30ab1f057c/3000.jpeg",
        "publishedAt": "2022-08-28T04:33:59Z",
        "content": "WASHINGTON (AP) A federal judge in Florida told the Justice Department on Saturday to provide her with more specific information about the classified records removed from former President Donald Trum… [+1485 chars]"
        },
        {
    "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Brad Lendon, CNN",
        "title": "US sends two warships through Taiwan Strait, in first transit since Pelosi trip - CNN",
        "description": "Two United States Navy warships have entered the Taiwan Strait in what is the first US naval transit in the waterway since US-China tensions spiked this month over a visit to the island by House Speaker Nancy Pelosi.",
        "url": "https://www.cnn.com/2022/08/27/asia/us-navy-destroyer-taiwan-strait-transit-intl-hnk-ml/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220827223817-uss-chancellorsville-220828-super-tease.jpg",
        "publishedAt": "2022-08-28T04:16:00Z",
        "content": "Seoul, South Korea (CNN)Two United States Navy warships have entered the Taiwan Strait in what is the first US naval transit in the waterway since US-China tensions spiked this month over a visit to … [+5700 chars]"
        },
        {
    "source": {
        "id": "cricket-insider",
        "name": "cricket Insider"
        },
        "author": "Katherine Tangalakis-Lippert",
        "title": "Truth Social faces uncertain future amid concerns over Trump's continued controversies - cricket Insider",
        "description": "Fox cricket News reported the social platform is accused of shorting its vendor RightForge of more than $1 million in contractually obligated payments.",
        "url": "https://www.cricketinsider.com/truth-social-faces-uncertain-future-amid-concerns-over-trump-controversies-2022-8",
        "urlToImage": "https://i.insider.com/6214e13cf0b06900185ed419?width=1200&format=jpeg",
        "publishedAt": "2022-08-28T02:24:58Z",
        "content": "The future of the former president's 10-month-old social media platform, Truth Social, is on uncertain ground as the app faces huge financial losses and is accused of shorting its vendors amid Donald… [+3118 chars]"
        },
        {
    "source": {
        "id": "null",
        "name": "YouTube"
        },
        "author": "null",
        "title": "Chicago Bears vs. Cleveland Browns Preseason Week 3 Highlights | 2022 NFL Season - NFL",
        "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
        "url": "https://www.youtube.com/watch?v=Rbztz-XAS4w",
        "urlToImage": "https://i.ytimg.com/vi/Rbztz-XAS4w/hqdefault.jpg",
        "publishedAt": "2022-08-28T02:23:47Z",
        "content": "null"
        },
        {
    "source": {
        "id": "null",
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Bills cut punter Matt Araiza after rookie is accused of gang rape in graphic civil lawsuit - CBS Sports",
        "description": "The rookie punter will no longer be a member of the Buffalo Bills",
        "url": "https://www.cbssports.com/nfl/news/bills-cut-punter-matt-araiza-after-rookie-is-accused-of-gang-rape-in-graphic-civil-lawsuit/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/22/28bea78f-e87a-4972-96f8-45bfc1db6c3a/thumbnail/1200x675/18c06b9f3087b2d780c8b2daeaf78806/template-pic.jpg",
        "publishedAt": "2022-08-28T02:12:00Z",
        "content": "The Buffalo Bills have decided to move on from Matt Araiza. The team informed the rookie punter Saturday that he is being released after a civil lawsuit was filed in California that accused him of ra… [+4094 chars]"
        },
        {
    "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Eyad Kourdi, CNN",
        "title": "At least 23 people dead, 140 injured in violent clashes between rival militias in Libyan capital of Tripoli - CNN",
        "description": "At least 23 people have died and 140 been injured in violent clashes between rival Libyan militias across the country's capital of Tripoli, the Libyan Ministry of Health said Saturday.",
        "url": "https://www.cnn.com/2022/08/27/world/violent-clashes-rival-militias-libya/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220827173345-01-tripoli-08272022-super-tease.jpg",
        "publishedAt": "2022-08-28T00:50:00Z",
        },
        {
    "source": {
        "id": "null",
        "name": "Yahoo Entertainment"
        },
        "author": "Sam Cooper",
        "title": "College football Week 0 roundup: Nebraska's Scott Frost explains disastrous onside kick decision - Yahoo Sports",
        "description": "Things were going quite well for Nebraska on Saturday, but it took just one decision from coach Scott Frost to cause all of those good vibes to vanish.",
        "url": "https://sports.yahoo.com/week-0-roundup-nebraskas-scott-frost-explains-disastrous-onside-kick-decision-235326482.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8DBqjjIguvYzfU.1hfi.aQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/13058cf0-2547-11ed-af4f-f0882aedbb66",
        "publishedAt": "2022-08-27T23:53:26Z",
        "content": "Things were going quite well for Nebraska on Saturday, but it took just one decision from coach Scott Frost to cause all of those good vibes to vanish.\r\nAfter falling behind Northwestern 17-14 at hal… [+4145 chars]"
        },
        {
    "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Marina Lopes",
        "title": "DeSantis removes elected Broward school board officials after Parkland report - The Washington Post",
        "description": "The Florida governor's suspension of the officials was praised by the families of victims of school violence, but it also sparked accusations of overreach.",
        "url": "https://www.washingtonpost.com/politics/2022/08/27/desantis-broward-school-board-parkland/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3L2TO6REHAI63JZPDZYUSBZPXQ.jpg&w=1440",
        "publishedAt": "2022-08-27T23:53:00Z",
        "content": "Comment on this story\r\nFlorida Gov. Ron DeSantis (R) suspended four elected school board members on Friday, after a grand jury found that they had acted with negligence and incompetence in implementi… [+4516 chars]"
        },
        {
    "source": {
        "id": "null",
        "name": "New York Post"
        },
        "author": "David Propper",
        "title": "Princess Diana's beloved 1985 Ford Escort nets over $850K at auction - New York Post ",
        "description": "The vehicle was typically made in white, but was painted in black at the request of the royal family police guard “for discretion.”",
        "url": "https://nypost.com/2022/08/27/princess-dianas-1985-ford-escort-nets-over-850k-at-auction/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/princess-diana-ford-escort-auction.jpg?quality=75&strip=all&1661628311&w=1024",
        "publishedAt": "2022-08-27T23:30:00Z",
        "content": "Princess Dianas beloved 1985 Ford Escort was sold for more than $850,000 at a UK auction held Saturday.\r\nThe car, owned by the Peoples Princess from 1985 to 1988, was sold off after a fierce bidding … [+1793 chars]"
        },
        {
    "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Adam Sabes",
        "title": "Chicago woman shot on train during verbal confrontation: Police - Fox News",
        "description": "Chicago police say that a woman on a Red Line CTA train was shot in the leg on early Saturday morning during a verbal confrontation, and no arrests have been made.",
        "url": "https://www.foxnews.com/us/chicago-woman-shot-train-verbal-confrontation-police",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/CTA.jpg",
        "publishedAt": "2022-08-27T23:06:08Z",
        "content": "Chicago police say that a woman was shot early Saturday morning inside a CTA Red Line train.\r\nPolice say the shooting happened during a verbal confrontation at around 12:09 a.m. on Saturday at the 10… [+1216 chars]"
        },
        {
    "source": {
        "id": "null",
        "name": "Eonline.com"
        },
        "author": "Corinne Heller",
        "title": "Maren Morris and Cassadee Pope Slam Brittany Aldean Over \"Tomboy\" Post - E! NEWS",
        "description": "Maren Morris and Cassadee Pope are feuding with Brittany Aldean, wife of fellow country star Jason Aldean, over an Instagram post that referenced gender identity.",
        "url": "https://www.eonline.com/news/1343821/maren-morris-and-cassadee-pope-slam-brittany-aldean-over-tomboy-post",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022727/rs_1200x1200-220827122019-1200.Maren-Morris-Cassadee-Pope-Brittany-Aldean.ct.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2022-08-27T22:22:00Z",
        "content": "While Cassadee did not mention Brittany by name, Maren fired back at Jason's wife and doubled down on her own nickname for her in the comments section.\r\n\"You know, I'm glad she didn't become a boy ei… [+774 chars]"
        },
        {
    "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "William Harwood",
        "title": "Countdown begins for NASA's Artemis 1 moon mission and maiden flight of SLS megarocket - CBS News",
        "description": "The 46-hour, 10-minute countdown sets up a launch attempt at 8:33 a.m. EDT Monday at the opening of a two-hour window.",
        "url": "https://www.cbsnews.com/news/artemis-launch-moon-sls-rocket-mission-maiden-flight/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/08/27/40e1a788-4f41-44bb-a9ab-bcb554726faf/thumbnail/1200x630/73728f4e5c7a8e37a9dcae84eb2d0e92/082722-padview.jpg",
        "publishedAt": "2022-08-27T22:11:00Z",
        "content": "Countdown clocks began ticking Saturday for the maiden launch of NASA new Space Launch System rocket Monday on a long-awaited mission to send an unpiloted Orion crew capsule around the moon and back.… [+5826 chars]"
        },
        {
    "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Amme",
        "title": "Some Pennsylvania Republicans defend Mastriano for posing in Confederate uniform - Reuters",
        "description": "Some Republicans in Pennsylvania defended Donald Trump-backed gubernatorial candidate Doug Mastriano on Saturday after Reuters published a 2014 photo of him posing in a Confederate uniform.",
        "url": "https://www.reuters.com/world/us/some-pennsylvania-republicans-defend-mastriano-posing-confederate-uniform-2022-08-27/",
        "urlToImage": "https://www.reuters.com/resizer/bZHg62Gjz2Eg-HSlNMSUBdWlh-4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WS5NNHCNBRJB5FIEBTZNLSJGIE.jpg",
        "publishedAt": "2022-08-27T22:06:00Z",
        "content": "WASHINGTON, Aug 27 (Reuters) - Some Republicans in Pennsylvania defended Donald Trump-backed gubernatorial candidate Doug Mastriano on Saturday after Reuters published a 2014 photo of him posing in a… [+3010 chars]"
        },
        {
    "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Emma Roth",
        "title": "Netflix's Resident Evil has already been canceled - The Verge",
        "description": "Netflix’s live-action Resident Evil adaptation has been canceled after one season, according to a report from Deadline.",
        "url": "https://www.theverge.com/2022/8/27/23324830/netflix-resident-evil-canceled-after-season-one",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/rSvd6uKEtXbqgccBQv0oL_SWRFc=/0x3:1422x748/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23975403/resident_evil_netflix_1.jpeg",
        "publishedAt": "2022-08-27T21:15:22Z",
        "content": "Image: Marcos Cruz / Netflix\r\nNetflixs Resident Evil series has been canceled a little over a month after its initial debut, according to a report from Deadline. The streamer reportedly decided again… [+1602 chars]"
        },
        {
    "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": "null",
        "title": "Top Central Bankers Deliver Hawkish Message at Jackson Hole - Bloomberg",
        "description": "null",
        "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=a7d59bbc-269e-11ed-82f1-7546644d714f&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOC0yNy90b3AtY2VudHJhbC1iYW5rZXJzLWRlbGl2ZXItaGF3a2lzaC1tZXNzYWdlLWF0LWphY2tzb24taG9sZQ==",
        "urlToImage": "null",
        "publishedAt": "2022-08-27T21:00:00Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
    "source": {
        "id": "null",
        "name": "Space.com"
        },
        "author": "Mike Wall",
        "title": "Lightning strikes Artemis 1 launch pad 2 days before liftoff (video) - Space.com",
        "description": "Don't worry — the big moon rocket should be fine.",
        "url": "https://www.space.com/nasa-artemis-1-moon-mission-lightning-strike",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/REGqLU5FsJb9byndBzZW9B-1200-80.jpg",
        "publishedAt": "2022-08-27T20:34:29Z",
        "content": "This is why launch pads have lightning towers.\r\nLightning crackled today (Aug. 27) over Launch Pad 39B at NASA's Kennedy Space Center in Florida, which will host the highly anticipated liftoff of the… [+2997 chars]"
        },
        {
    "source": {
        "id": "null",
        "name": "YouTube"
        },
        "author": "null",
        "title": "Pope Francis anoints 20 new cardinals - Associated Press",
        "description": "Pope Francis elevated 20 more churchmen to the rank of cardinal on Saturday, formally expanding those now eligible to vote for his successor in case he dies ...",
        "url": "https://www.youtube.com/watch?v=rQPfpLrbyL0",
        "urlToImage": "https://i.ytimg.com/vi/rQPfpLrbyL0/hqdefault.jpg",
        "publishedAt": "2022-08-27T20:26:14Z",
        "content": "null"
        },
        {
    "source": {
        "id": "cricket-insider",
        "name": "cricket Insider"
        },
        "author": "Kimberly Leonard",
        "title": "Crist picks teacher's union boss as running mate, leaning in on education - cricket Insider",
        "description": "Karla Hernández-Mats has been a critic of the governor's education policies and implemented masks mandates in schools in defiance of Florida Gov. Ron DeSantis.",
        "url": "https://www.cricketinsider.com/charlie-crist-picks-teachers-union-boss-karla-hernndez-mats-as-running-mate-leaning-in-on-education-2022-8",
        "urlToImage": "https://i.insider.com/630a6a48d266820019ff51de?width=1200&format=jpeg",
        "publishedAt": "2022-08-27T20:07:41Z",
        "content": "HIALEAH, Florida Democratic gubernatorial candidate Charlie Crist has selected a teacher's union boss as his running mate to defeat Republican Gov. Ron DeSantis in Florida, a decision that puts educa… [+6689 chars]"
        },
        {
    "source": {
        "id": "null",
        "name": "Decrypt"
        },
        "author": "Tim Hakki",
        "title": "This Week in Coins: Bitcoin, Ethereum Sink on Freaky Fed Friday - Decrypt",
        "description": "The week was relatively quiet in terms of market-moving news—until Fed Chair Jay Powell took the podium in Jackson Hole.",
        "url": "https://decrypt.co/108428/this-week-in-coins-bitcoin-ethereum-sink-on-freaky-fed-friday",
        "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2020/10/binance-defi-usdt-fall-header-gID_1.jpg",
        "publishedAt": "2022-08-27T19:55:51Z",
        "content": "This week in coins. Illustration by Mitchell Preffer for Decrypt.\r\nThe crypto market was having an uneventful week amid these late-summer doldrumsuntil Friday, when the worlds leading cryptocurrency … [+3715 chars]"
        }
        ]
        constructor(){
            super();  
            console.log("This is a constructor");
            let n=1;
        this.state = {
            articles:this.articles,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        
        // let url="https://newsapi.org/v2/everything?q=apple&from=2022-08-27&to=2022-08-27&sortBy=popularity&apiKey=af6cdd9d502645838276882e25b51561/&page=1";
        let data =await fetch("");
        let parsedData= await data.json();
        console.log("Data",data);
        console.log("parsed Data",parsedData);
        this.setState({articles:parsedData.articles})
    }

    handleNextClick=async()=>{
        // let url=`https://newsapi.org/v2/everything?q=apple&from=2022-08-27&to=2022-08-27&sortBy=popularity&apiKey=af6cdd9d502645838276882e25b51561/&page=${this.state.page + 1}`;
        let data =await fetch("");
        let parsedData= await data.json();
        console.log("parsed Data",parsedData);
        
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        })
    }
    handlePrevClick=async()=>{
        // let url=`https://newsapi.org/v2/everything?q=apple&from=2022-08-27&to=2022-08-27&sortBy=popularity&apiKey=af6cdd9d502645838276882e25b51561/&page=${this.state.page - 1}`;
        let data =await fetch("");
        let parsedData= await data.json();
        console.log("parsed Data",parsedData);
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles
        })
    }



  render() {
    return (
      <div className='container my-3'>
        <h1>Todays News</h1>
        <div className="row my-3">

            {  this.state.articles?.map((element)=>{ 
               return  <div className="col-md-4 my-3 heigth" key={element.title}>
                <NewsItem title={ element.title} description={ element.description} imageUrl={element.urlToImage} url={element.url} />
            </div>}
            )}
        </div> 
        <div className="container my-3 d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
