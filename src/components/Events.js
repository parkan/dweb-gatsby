import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Event from './Event'

export default function Events() {
  const [period, setPeriod] = useState('upcoming')

  const data = JSON.parse(`{
  "data": {
    "allWordpressWpEvent": {
      "nodes": [
        {
          "title": "Ethics of the Decentralized Web &#038; Uses for the Law, Journalism and Humanitarian Work",
          "id": "9ab0cf36-ddb2-5bb5-b9f0-c599a33b2b45",
          "acf": {
            "ended_at": "2022-06-30 14:00:00",
            "started_at": "2022-06-30 13:00:00*30 Jun#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_zePbnyhTRFiLCSrEpPhZFA"
          }
        },
        {
          "title": "Decentralised Storage, Swarm and Web 3.0",
          "id": "db36b2dd-0e26-5507-8bb7-c85cca8920ed",
          "acf": {
            "ended_at": "2022-06-07 19:30:00",
            "started_at": "2022-06-07 18:00:00*7 Jun#Tue, 18:00",
            "city": {
              "post_title": "Prague",
              "wordpress_id": 247
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#1e72ff",
            "registration_link": "https://www.meetup.com/dweb-prague/events/285981456/"
          }
        },
        {
          "title": "Decentralized Apps, the Metaverse and the \u201cNext Big Thing\u201d",
          "id": "ddec7305-36c1-507b-876a-e5366dfca90d",
          "acf": {
            "ended_at": "2022-05-26 14:00:00",
            "started_at": "2022-05-26 13:00:00*26 May#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_C6qo-wHBRfehbnTdP7GIqg"
          }
        },
        {
          "title": "Goodbye Facebook, Hello Decentralized Social Media? Can Peer-to-Peer Lead to Less Toxic Online Platforms?",
          "id": "cfb3a157-5dac-5889-8acd-d2bb2a1f154f",
          "acf": {
            "ended_at": "2022-04-28 14:00:00",
            "started_at": "2022-04-28 13:00:00*28 Apr#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_2jhG2yOvSCalJyyV7btp6w"
          }
        },
        {
          "title": "Keeping Your Personal Data Personal: How Decentralized Identity Drives Data Privacy",
          "id": "9285c5b4-a810-52a0-90a5-587dd48451ef",
          "acf": {
            "ended_at": "2022-03-31 14:00:00",
            "started_at": "2022-03-31 13:00:00*31 Mar#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_TETvI8qYTV2Cowt_JtmplQ?mc_cid=5f786dc67a&mc_eid=8c6dec5073"
          }
        },
        {
          "title": "DWeb + MozFest: Ecological Imperatives &#038; the Decentralized Web",
          "id": "62488d1a-6a02-554f-b66f-917f70cc7c6c",
          "acf": {
            "ended_at": "2022-03-09 12:15:00",
            "started_at": "2022-03-09 11:15:00*9 Mar#Wed, 11:15",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-Mozfest01-meetup.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://schedule.mozillafestival.org/session/QVKYWF-1"
          }
        },
        {
          "title": "Using Decentralized Storage to Keep Your Materials Safe",
          "id": "b9879fe9-c5f5-57ac-abff-7d9f982833e5",
          "acf": {
            "ended_at": "2022-02-24 14:00:00",
            "started_at": "2022-02-24 13:00:00*24 Feb#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/METRO-session-02-v-1.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_A_fJxDJbS9KzAzauf0JDdA"
          }
        },
        {
          "title": "The Decentralized Web: An Introduction",
          "id": "351f2803-b0bc-5dab-a69a-07992911f21b",
          "acf": {
            "ended_at": "2022-01-27 14:00:00",
            "started_at": "2022-01-27 13:00:00*27 Jan#Thu, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "workshop"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://us02web.zoom.us/webinar/register/WN_TkZfiLBGQgS-uap3TPAaZw"
          }
        },
        {
          "title": "DWeb Holiday Fair &#8211; Dec 2021 Meetup",
          "id": "8bfb0afa-7eb0-5c02-baa4-e3238a861d05",
          "acf": {
            "ended_at": "2021-12-08 11:30:00",
            "started_at": "2021-12-08 10:00:00*8 Dec#Wed, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "science fair"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-holiday-fair-dec-2021-meetup-tickets-218423960947"
          }
        },
        {
          "title": "DWeb Meetup Nov 2021 \\u2014 Centering Respect, Trust and Equity in the DWeb",
          "id": "99c26826-35aa-5650-a3f4-9e86b941e158",
          "acf": {
            "ended_at": "2021-11-04 18:30:00",
            "started_at": "2021-11-04 17:00:00*4 Nov#Thu, 17:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-nov-2021-centering-respect-trust-and-equity-in-the-dweb-tickets-199517731907"
          }
        },
        {
          "title": "Web3 Recruiting Happy Hour",
          "id": "c1f217bf-001a-59a8-a91c-e47d5f26a4c9",
          "acf": {
            "ended_at": "2021-10-18 15:00:00",
            "started_at": "2021-10-18 14:00:00*18 Oct#Mon, 14:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "job fair"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/web3-recruiting-happy-hour-tickets-180240844217?aff=TO1"
          }
        },
        {
          "title": "DWeb Meetup September 2021 \\u2014 Preserving Humanity&#8217;s Greatest Assets",
          "id": "a3438f3e-dcf1-5692-9867-d158ffa3a59a",
          "acf": {
            "ended_at": "2021-09-28 11:30:00",
            "started_at": "2021-09-28 10:00:00*28 Sep#Tue, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-sept-2021-eventbrite.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-september-2021-preserving-humanities-greatest-assets-tickets-168352156833"
          }
        },
        {
          "title": "Green Consensus &#8211; Eco-Friendly Blockchains",
          "id": "93391ca1-ee1a-554f-8377-f6e3650de681",
          "acf": {
            "ended_at": "2021-06-23 20:00:00",
            "started_at": "2021-06-23 19:00:00*23 Jun#Wed, 19:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/278432872/"
          }
        },
        {
          "title": "DWeb Meetup June 2021 \\u2014 The Latest in the DWeb Ecosystem",
          "id": "f0fbc8ef-c571-5577-b4ee-8ca0f3935990",
          "acf": {
            "ended_at": "2021-06-02 18:30:00",
            "started_at": "2021-06-02 17:00:00*2 Jun#Wed, 17:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-The-latest-in-DWeb-SF-cover-June2021.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-june-2021-the-latest-in-the-dweb-ecosystem-tickets-155980892047"
          }
        },
        {
          "title": "Central Bank Digital Currencies",
          "id": "2791d2fd-0a6f-5c0a-a7f8-813785bbb876",
          "acf": {
            "ended_at": "2021-05-26 20:00:00",
            "started_at": "2021-05-26 19:00:00*26 May#Wed, 19:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/277865090/"
          }
        },
        {
          "title": "Dweb Meetup May 2021: NFTs \\u2014 Hope or Hype for Art?",
          "id": "b9025d24-3ddf-5139-aff9-f5998242fd52",
          "acf": {
            "ended_at": "2021-05-04 11:30:00",
            "started_at": "2021-05-04 10:00:00*4 May#Tue, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-cover-NFT-03.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-may-2021-nfts-hope-or-hype-for-art-tickets-152562471459"
          }
        },
        {
          "title": "NFT Innovation and Dynamic Property Rights",
          "id": "17d4817f-0860-5a2c-b42f-7a6e54dfc2cb",
          "acf": {
            "ended_at": "2021-04-28 20:00:00",
            "started_at": "2021-04-28 19:00:00*28 Apr#Wed, 19:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "panel discussion"
              }
            ],
            "event_image": null,
            "hover_color": "#dd9933",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/277088176/"
          }
        },
        {
          "title": "DWeb Meetup (virtual): The Latest in the DWeb Ecosystem",
          "id": "a20374fd-0cd6-5ebb-8373-33cd1ebe19fa",
          "acf": {
            "ended_at": "2021-03-25 12:00:00",
            "started_at": "2021-03-25 10:00:00*25 Mar#Thu, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-The-latest-in-DWeb-SF-cover.jpg"
              }
            },
            "hover_color": "#eeee22",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-march-2021-the-latest-in-the-dweb-ecosystem-tickets-142013104017"
          }
        },
        {
          "title": "DeFi &#038; Regulation: A Legal Panel Discussion",
          "id": "9ca51980-3a4a-5a6c-b833-0d9c6650b4f8",
          "acf": {
            "ended_at": "2021-03-24 21:00:00",
            "started_at": "2021-03-24 19:00:00*24 Mar#Wed, 19:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "panel discussion"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/Desert-Blockchain-March-event.png"
              }
            },
            "hover_color": "#dd9933",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/276442286/"
          }
        },
        {
          "title": "Perm Winter School &#8217;21",
          "id": "d4393b21-9fda-552f-94c6-88257e9c6274",
          "acf": {
            "ended_at": "2021-02-27 14:00:00",
            "started_at": "2021-02-25 20:00:00*25 Feb#Thu, 20:00",
            "city": {
              "post_title": "Perm",
              "wordpress_id": 252
            },
            "event_type": [
              {
                "name": "summit"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/Perm-winter-school-2021.jpeg"
              }
            },
            "hover_color": "#e9e0cb",
            "registration_link": "https://permwinterschool.ru/"
          }
        },
        {
          "title": "AZ Fintech Council &#8211; Opportunities for Startups",
          "id": "a2a6807b-af2a-52aa-93fb-e5473aee7830",
          "acf": {
            "ended_at": "2021-02-24 20:00:00",
            "started_at": "2021-02-24 19:00:00*24 Feb#Wed, 19:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/276054519/"
          }
        },
        {
          "title": "(virtual) A New Portal for the Decentralized Web",
          "id": "dc0da02f-1618-5f80-96e3-e54959ec0bed",
          "acf": {
            "ended_at": "2021-02-18 12:00:00",
            "started_at": "2021-02-18 10:00:00*18 Feb#Thu, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWebCover-2.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-february-a-new-portal-for-the-decentralized-web-tickets-140004147173"
          }
        },
        {
          "title": "Bitwarden Meets Blockchain",
          "id": "8f5c047a-c7ae-57a8-a015-429c01c7d41d",
          "acf": {
            "ended_at": "2021-01-27 00:00:00",
            "started_at": "2021-01-27 00:00:00*27 Jan#Wed, 00:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/275256733/"
          }
        },
        {
          "title": "DWeb Holiday Social: Hang out with folks from the DWeb",
          "id": "7f09fc45-7ca8-54f4-be4f-6650bb4ebcc3",
          "acf": {
            "ended_at": "2020-12-29 12:00:00",
            "started_at": "2020-12-29 10:00:00*29 Dec#Tue, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-Holiday-Social-SF-eventbrite-cover.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-holiday-social-hang-out-with-folks-from-the-dweb-tickets-133902356553"
          }
        },
        {
          "title": "2020 Review &#038; 2021 Forecast",
          "id": "abcf2ec0-d361-598e-8db2-f0c3b4816dca",
          "acf": {
            "ended_at": "2020-12-16 00:00:00",
            "started_at": "2020-12-16 00:00:00*16 Dec#Wed, 00:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/274677676/"
          }
        },
        {
          "title": "The Latest in the DWeb Ecosystem",
          "id": "37cc6d55-1668-50e3-902c-4dd1ee75b208",
          "acf": {
            "ended_at": "2020-12-03 00:00:00",
            "started_at": "2020-12-03 00:00:00*3 Dec#Thu, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-The-latest-in-DWeb-SF-cover.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-december-2020-the-latest-in-the-dweb-ecosystem-tickets-130047907793#"
          }
        },
        {
          "title": "Decentralized Voting Innovation",
          "id": "ef7ee503-b354-5c93-a9a8-cbba25e8d1f9",
          "acf": {
            "ended_at": "2020-11-18 00:00:00",
            "started_at": "2020-11-18 00:00:00*18 Nov#Wed, 00:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/274273030/"
          }
        },
        {
          "title": "The Fifth Annual Conference of Network Society: The Web of Phronesis &#8211; West Lake Mesh Network Workshop",
          "id": "2b8c0dff-e9b9-5dca-9ce1-1dbb4bb6736c",
          "acf": {
            "ended_at": "2020-11-15 00:00:00",
            "started_at": "2020-11-14 00:00:00*14 Nov#Sat, 00:00",
            "city": {
              "post_title": "Shanghai",
              "wordpress_id": 249
            },
            "event_type": [
              {
                "name": "Hackathon"
              }
            ],
            "event_image": null,
            "hover_color": "#9dbcb6",
            "registration_link": "https://www.caa-ins.org/archives/6927/2"
          }
        },
        {
          "title": "Halloween, Blockchain &#038; IoT",
          "id": "530fe361-54bf-50e8-91d6-ca85127bdc5f",
          "acf": {
            "ended_at": "2020-10-28 00:00:00",
            "started_at": "2020-10-28 00:00:00*28 Oct#Wed, 00:00",
            "city": {
              "post_title": "Arizona",
              "wordpress_id": 63
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ea9f67",
            "registration_link": "https://www.meetup.com/Desert-Blockchain/events/sgztmqybcnblc/"
          }
        },
        {
          "title": "If Big Tech is Toxic, How Do We build something Better?",
          "id": "52f8c794-2485-5887-be4e-0eb6302d1e79",
          "acf": {
            "ended_at": "2020-09-22 00:00:00",
            "started_at": "2020-09-22 00:00:00*22 Sep#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-if-big-tech-is-toxic-how-do-we-build-something-better-tickets-120479309859#"
          }
        },
        {
          "title": "2020 Community Views Around the Globe",
          "id": "3781daa5-84e1-55bc-9ea8-f4b45da5c97e",
          "acf": {
            "ended_at": "2020-07-29 00:00:00",
            "started_at": "2020-07-29 00:00:00*29 Jul#Wed, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-july2020-community-views-around-the-globe-tickets-114369343786"
          }
        },
        {
          "title": "The State of the Decentralized Web",
          "id": "3011b1a0-9810-5b84-99a3-976fbbaea1ad",
          "acf": {
            "ended_at": "2020-06-24 00:00:00",
            "started_at": "2020-06-24 00:00:00*24 Jun#Wed, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meetup-2020the-state-of-the-decentralized-web-tickets-109884774318#"
          }
        },
        {
          "title": "If Big Tech is Toxic, How Do We build something Better?",
          "id": "7ea27ece-3dbc-5e6e-86aa-38461bfdd3e4",
          "acf": {
            "ended_at": "2020-05-30 00:00:00",
            "started_at": "2020-05-28 00:00:00*28 May#Thu, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-SocialDilemma-SF-cover.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "#"
          }
        },
        {
          "title": "DWeb Camp",
          "id": "b6f64a08-d190-5e6d-a8c8-7d6ed7546574",
          "acf": {
            "ended_at": "2020-05-26 20:00:00",
            "started_at": "2020-05-24 10:00:00*24 May#Sun, 10:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "camp"
              },
              {
                "name": "retreat"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/dwebcamp.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "#"
          }
        },
        {
          "title": "Decentralized Storage",
          "id": "4f746196-dae4-5697-9d39-9d2bad890047",
          "acf": {
            "ended_at": "2020-05-13 00:00:00",
            "started_at": "2020-05-13 00:00:00*13 May#Wed, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-meet-up-virtual-decentralized-storage-comes-of-age-tickets-104783963656#"
          }
        },
        {
          "title": "Community Views Around the Globe",
          "id": "34703e4b-a395-54ff-af52-01deba57ba55",
          "acf": {
            "ended_at": "2020-05-01 16:00:00",
            "started_at": "2020-05-01 13:00:00*1 May#Fri, 13:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-eventbrite-one-year-after-DWebCamp-SF-cover.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "#"
          }
        },
        {
          "title": "Building a New decentralized Web",
          "id": "ed8be427-2b43-5391-9ea2-e4f5f7ec862f",
          "acf": {
            "ended_at": "2020-02-19 23:00:00",
            "started_at": "2020-02-19 18:00:00*19 Feb#Wed, 18:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "science fair"
              },
              {
                "name": "panel discussion"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWebFeb_cover.png"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://www.meetup.com/dweb-berlin/events/268295872/"
          }
        },
        {
          "title": "Perm Winter School on Digital Finance",
          "id": "e939b64d-5325-5615-a127-bc6abf92491b",
          "acf": {
            "ended_at": "2020-02-02 22:00:00",
            "started_at": "2020-02-01 00:00:00*1 Feb#Sat, 00:00",
            "city": {
              "post_title": "Perm",
              "wordpress_id": 252
            },
            "event_type": [
              {
                "name": "mini conference"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/PWS-2020.jpeg"
              }
            },
            "hover_color": "#44c068",
            "registration_link": "http://www.permwinterschool.ru"
          }
        },
        {
          "title": "Decentralized Social Media",
          "id": "61e1b620-f81b-5ba1-892f-226b5bdcda56",
          "acf": {
            "ended_at": "2020-01-21 00:00:00",
            "started_at": "2020-01-21 00:00:00*21 Jan#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-sf-meet-up-january-tickets-88949818301#"
          }
        },
        {
          "title": "Applications and toolkits for the next-generation Internet",
          "id": "d8e2910d-66f2-5a83-9744-ec45b5165663",
          "acf": {
            "ended_at": "2019-12-29 16:00:00",
            "started_at": "2019-12-29 14:00:00*29 Dec#Sun, 14:00",
            "city": {
              "post_title": "Shanghai",
              "wordpress_id": 249
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/shanghai-applications-and-tools.png"
              }
            },
            "hover_color": "#9dbcb6",
            "registration_link": "https://www.meetup.com/dweb-shanghai/events/267409112/"
          }
        },
        {
          "title": "IPFS#3: Developing apps with IPFS",
          "id": "749ec0e4-5688-5afc-adcb-ae4df2679e8e",
          "acf": {
            "ended_at": "2019-11-20 00:00:00",
            "started_at": "2019-11-20 00:00:00*20 Nov#Wed, 00:00",
            "city": {
              "post_title": "Prague",
              "wordpress_id": 247
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#55ceb5",
            "registration_link": "https://www.meetup.com/dweb-prague/events/263923023/"
          }
        },
        {
          "title": "DWebDesign #3: Open Source Design and Design for Open Source",
          "id": "8b8dada5-8a00-5365-8ae3-cbc412b1bb83",
          "acf": {
            "ended_at": "2019-11-18 22:00:00",
            "started_at": "2019-11-18 19:00:00*18 Nov#Mon, 19:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/OSD-eventbrite-01-1024x516-1.png"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://jolocom.io/blog/open-source-design-resources/"
          }
        },
        {
          "title": "Decentralization: Why and How?",
          "id": "e30341f2-600c-5668-858e-0a261c687666",
          "acf": {
            "ended_at": "2019-10-27 00:00:00",
            "started_at": "2019-10-27 00:00:00*27 Oct#Sun, 00:00",
            "city": {
              "post_title": "Shanghai",
              "wordpress_id": 249
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#9dbcb6",
            "registration_link": "https://www.meetup.com/dweb-shanghai/events/265627232/"
          }
        },
        {
          "title": "IPFS#2: Files in IPFS and hands-on workshop",
          "id": "9deac91f-0eb5-5902-8e04-a8f5cada9fe8",
          "acf": {
            "ended_at": "2019-10-23 00:00:00",
            "started_at": "2019-10-23 00:00:00*23 Oct#Wed, 00:00",
            "city": {
              "post_title": "Prague",
              "wordpress_id": 247
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#55ceb5",
            "registration_link": "https://www.meetup.com/dweb-prague/events/263909416/"
          }
        },
        {
          "title": "Let&#8217;s talk DWeb and DWeb Camp!",
          "id": "07f9d896-c9ea-504b-bc1b-45f68000d122",
          "acf": {
            "ended_at": "2019-10-01 00:00:00",
            "started_at": "2019-10-01 00:00:00*1 Oct#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.meetup.com/dwebsf/events/265159571/"
          }
        },
        {
          "title": "DWeb Shanghai Kick-off",
          "id": "f65d5973-4b72-5a13-af1c-547a6decda2a",
          "acf": {
            "ended_at": "2019-09-28 00:00:00",
            "started_at": "2019-09-28 00:00:00*28 Sep#Sat, 00:00",
            "city": {
              "post_title": "Shanghai",
              "wordpress_id": 249
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#9dbcb6",
            "registration_link": "https://www.meetup.com/dweb-shanghai/events/265090085/"
          }
        },
        {
          "title": "IPFS#1: Intro to IPFS &#8211; the future of (distributed) web",
          "id": "b5885d7c-1f1c-561d-8c78-f212eda8fa55",
          "acf": {
            "ended_at": "2019-09-25 00:00:00",
            "started_at": "2019-09-25 00:00:00*25 Sep#Wed, 00:00",
            "city": {
              "post_title": "Prague",
              "wordpress_id": 247
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#55ceb5",
            "registration_link": "https://www.meetup.com/dweb-prague/events/263670580/"
          }
        },
        {
          "title": "Perm Summer School on Blockchain &#038; Cryptomarkets",
          "id": "48dc5ef0-4385-5176-8a91-e2489930ebdb",
          "acf": {
            "ended_at": "2019-08-18 20:00:00",
            "started_at": "2019-08-16 09:00:00*16 Aug#Fri, 09:00",
            "city": {
              "post_title": "Perm",
              "wordpress_id": 252
            },
            "event_type": [
              {
                "name": "camp"
              },
              {
                "name": "mini conference"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/PSS-2020.jpg"
              }
            },
            "hover_color": "#44c068",
            "registration_link": "http://perm.school"
          }
        },
        {
          "title": "DWeb Camp 2019",
          "id": "f04ed77f-cae4-55cc-9804-31b3902aa5ef",
          "acf": {
            "ended_at": "2019-07-23 00:00:00",
            "started_at": "2019-07-21 00:00:00*21 Jul#Sun, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "camp"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://dwebcamp.org/"
          }
        },
        {
          "title": "DWeb Camp Hackathon",
          "id": "d3319191-9271-578d-81d1-d15104c68a1b",
          "acf": {
            "ended_at": "2019-06-26 00:00:00",
            "started_at": "2019-06-26 00:00:00*26 Jun#Wed, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.meetup.com/dwebsf/events/262450799/"
          }
        },
        {
          "title": "Identity Stammtisch. Defining Identity for Things with Heather Vescent",
          "id": "542c1c6e-b09e-55bd-9872-9832f40bcce3",
          "acf": {
            "ended_at": "2019-05-18 18:00:00",
            "started_at": "2019-05-18 15:00:00*18 May#Sat, 15:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/Stammtisch-meetup2.png"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://www.meetup.com/dweb-berlin/events/261267658/"
          }
        },
        {
          "title": "DWeb.Design #2: Typonight",
          "id": "bf88a350-fac0-5b88-8c3a-c6080a8a357c",
          "acf": {
            "ended_at": "2019-05-15 21:00:00",
            "started_at": "2019-05-15 18:00:00*15 May#Wed, 18:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "mini conference"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/Typonight_cover-dribbble-insta01.jpg"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://twitter.com/GETJolocom/status/1128720391936053255"
          }
        },
        {
          "title": "It&#8217;s all about Decentralized Identity &#038; Data!",
          "id": "228ff4d2-76ce-5c21-88ed-8f52e5a060c1",
          "acf": {
            "ended_at": "2019-04-30 00:00:00",
            "started_at": "2019-04-30 00:00:00*30 Apr#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/decentralized-web-sf-meet-upapril-tickets-60842622923#"
          }
        },
        {
          "title": "Your Decentralized Identity",
          "id": "ff2ae647-6050-5d36-b0c1-0a9df6879050",
          "acf": {
            "ended_at": "2019-04-04 22:00:00",
            "started_at": "2019-04-04 18:00:00*4 Apr#Thu, 18:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/UseCase-meetup2-logos-new.png"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://www.meetup.com/dweb-berlin/events/259893537/"
          }
        },
        {
          "title": "DWeb SF Meet-Up: March 2019 Science Fair",
          "id": "203e7826-e606-5de1-bc18-df6fc89c5be4",
          "acf": {
            "ended_at": "2019-03-12 00:00:00",
            "started_at": "2019-03-12 00:00:00*12 Mar#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/decentralized-web-sf-meet-upmarch-tickets-56515197477#"
          }
        },
        {
          "title": "DWeb SF Meet-Up: February 2019",
          "id": "e4e34eff-7aa6-5cd7-b512-fd9e8b5ee7ec",
          "acf": {
            "ended_at": "2019-02-12 00:00:00",
            "started_at": "2019-02-12 00:00:00*12 Feb#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/decentralized-web-sf-meet-upfebruary-tickets-55740780174#"
          }
        },
        {
          "title": "DWebDesign #1: Embrace variety",
          "id": "5e38bed9-bed5-57fa-ae87-4f7c0091cc9e",
          "acf": {
            "ended_at": "2019-02-11 22:00:00",
            "started_at": "2019-02-11 18:00:00*11 Feb#Mon, 18:00",
            "city": {
              "post_title": "Berlin",
              "wordpress_id": 61
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/Dribbble-meetup-cover-Eventbrite.jpg"
              }
            },
            "hover_color": "#8dd2c5",
            "registration_link": "https://jolocom.io/2019/03/05/why-did-we-organise-dribbble-berlin-meetup/"
          }
        },
        {
          "title": "DWeb SF Meet-Up: January 2019",
          "id": "6175a5e4-662b-5dc3-a301-ca0e17f40033",
          "acf": {
            "ended_at": "2019-01-08 00:00:00",
            "started_at": "2019-01-08 00:00:00*8 Jan#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/decentralized-web-sf-meet-upjanuary-tickets-53988879191#"
          }
        },
        {
          "title": "DWeb SF Meet-Up: December 2018",
          "id": "1b92daa4-c1db-5502-9dd0-95282a88ecf8",
          "acf": {
            "ended_at": "2018-12-11 00:00:00",
            "started_at": "2018-12-11 00:00:00*11 Dec#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/decentralized-web-meet-up-tickets-52509395014"
          }
        },
        {
          "title": "DWeb SF Meet-Up: Launch of DWeb SF Meet-Up",
          "id": "22ab4429-c363-5453-ae7e-1d37cbfdd736",
          "acf": {
            "ended_at": "2018-10-10 00:00:00",
            "started_at": "2018-10-10 00:00:00*10 Oct#Wed, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "meetup"
              }
            ],
            "event_image": null,
            "hover_color": "#ffff00",
            "registration_link": "https://www.eventbrite.com/e/dweb-sf-meet-up-tickets-50801629040#"
          }
        },
        {
          "title": "DWeb Summit 2018",
          "id": "6472b718-fca8-5c8b-bc7a-f73f791b4fce",
          "acf": {
            "ended_at": "2018-08-02 20:00:00",
            "started_at": "2018-07-31 09:00:00*31 Jul#Tue, 09:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "summit"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-Summit2018.png"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://www.decentralizedweb.net"
          }
        },
        {
          "title": "DWeb Summit 2016",
          "id": "c2aede36-cee3-5ffe-8fbf-67b9e2038512",
          "acf": {
            "ended_at": "2016-06-09 00:00:00",
            "started_at": "2016-06-07 00:00:00*7 Jun#Tue, 00:00",
            "city": {
              "post_title": "San Francisco",
              "wordpress_id": 248
            },
            "event_type": [
              {
                "name": "summit"
              }
            ],
            "event_image": {
              "localFile": {
                "url": "/images/DWeb-event-cover-DWebSummit2016.jpg"
              }
            },
            "hover_color": "#ffff00",
            "registration_link": "https://2016.decentralizedweb.net/"
          }
        }
      ]
    },
    "allWordpressAcfCity": {
      "nodes": [
        {
          "acf": {
            "color": "#d62300"
          },
          "wordpress_id": 1093
        },
        {
          "acf": {
            "color": "#f97f60"
          },
          "wordpress_id": 1004
        },
        {
          "acf": {
            "color": "#38edb4"
          },
          "wordpress_id": 657
        },
        {
          "acf": {
            "color": "#e9e0cb"
          },
          "wordpress_id": 252
        },
        {
          "acf": {
            "color": "#9DBCB6"
          },
          "wordpress_id": 249
        },
        {
          "acf": {
            "color": "#ffff00"
          },
          "wordpress_id": 248
        },
        {
          "acf": {
            "color": "#1e72ff"
          },
          "wordpress_id": 247
        },
        {
          "acf": {
            "color": "#F63139"
          },
          "wordpress_id": 246
        },
        {
          "acf": {
            "color": "#EA9F67"
          },
          "wordpress_id": 63
        },
        {
          "acf": {
            "color": "#4fccf6"
          },
          "wordpress_id": 62
        },
        {
          "acf": {
            "color": "#aae1d7"
          },
          "wordpress_id": 61
        }
      ]
    },
    "wordpressAcfOptions": {
      "options": {
        "events_top_header": "Ready for DWeb Camp 2022?",
        "events_top_intro": "<p>In 2019, more than 450 builders and dreamers from around the globe gathered on a farm on the coast of California for the first DWeb Camp. Together we built bridges and community, while hacking, hiking to the beach, conversing around campfires and building a better society beneath the stars.</p>\\n<p>Stay tuned \\u2014 when the COVID is licked, we will organize our next DWeb Camp, hopefully in 2022.</p>\\n",
        "events_top_button_caption": "Join DWeb Camp",
        "events_top_button_link": "https://dwebcamp.org/",
        "events_top_image": {
          "localFile": {
            "url": "/images/dweb-camp-hero.jpg"
          }
        },
        "events_list_header": "Events around the world",
        "events_list_text": "Would you like to see an event listed?<br />Check out the <a href=\\\"https://dweb.events/\\\">DWeb events calendar</a>. You can subscribe to it and suggest events to be added.",
        "events_show_more_url": "/events-archive"
      }
    }
  }
}`)

  let events = data.data.allWordpressWpEvent.nodes

  const { options } = data.data.wordpressAcfOptions

  const citiesTemp = data.data.allWordpressAcfCity.nodes
  const cities = []

  citiesTemp.map((city) => {
    cities[city.wordpress_id] = city.acf.color
  })

  events = events.filter((event, key) => {
    const milliseconds = Date.now() - Date.parse(event.acf.ended_at)
    const eventPeriod = milliseconds > 0 ? 'past' : 'upcoming'
    events[key].period = eventPeriod
    return eventPeriod === period
  })

  const events_top_button_link =
    options.events_top_button_link.substr(0, 1) == '/' ? (
      <Link
        to={options.events_top_button_link}
        className="btn building-block__btn"
      >
        {options.events_top_button_caption}
      </Link>
    ) : (
      <a
        href={options.events_top_button_link}
        className="btn building-block__btn"
        target="_blank"
        rel="noreferrer"
      >
        {options.events_top_button_caption}
      </a>
    )

  let pastEventsLength = 0

  return (
    <div className="events" id="events">
      <div className="building-block">
        <div
          className="building-block__right"
          style={{
            backgroundImage: `url(${options.events_top_image.localFile.url})`,
          }}
        />
        <div className="building-block__left">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header building-block__header">
                  {options.events_top_header}
                </div>
                <div
                  className="building-block__text"
                  dangerouslySetInnerHTML={{ __html: options.events_top_intro }}
                />
                {events_top_button_link}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header events__header">
              {options.events_list_header}
            </div>
            <div className="events__headerlinks">
              <a
                className={`events__headerlink ${
                  period == 'upcoming' ? 'events__headerlink_active ' : ''
                }`}
                onClick={() => setPeriod('upcoming')}
              >
                upcoming
              </a>
              &emsp;
              <a
                className={`events__headerlink ${
                  period == 'past' ? 'events__headerlink_active ' : ''
                }`}
                onClick={() => setPeriod('past')}
              >
                recent
              </a>
            </div>
            <div
              className="header-notice events__notice"
              dangerouslySetInnerHTML={{ __html: options.events_list_text }}
            />
            {events
              .slice(0)
              .reverse()
              .map((event) => {
                if (event.period === 'upcoming') {
                  return (
                    <Event
                      event={event}
                      cities={cities}
                      key={`event_${event.id}`}
                    />
                  )
                }
              })}
            {events.map((event) => {
              pastEventsLength++
              if (pastEventsLength <= 7 && event.period === 'past') {
                return (
                  <Event
                    event={event}
                    cities={cities}
                    key={`event_${event.id}`}
                  />
                )
              }
            })}
            <div className="events__show_more">
              <Link
                className={`show-more ${period == 'upcoming' && 'd-none'}`}
                to={options.events_show_more_url}
              >
                Browse all past events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
