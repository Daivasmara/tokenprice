[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/daivasmara/cryptoprice">
    <img src="https://i.imgur.com/qgKixGf.png" alt="Logo" width="250" height="250">
  </a>

  <h3 align="center">CRYPTOPRICE</h3>

  <p align="center">
    Simple CLI tool to fetch the latest multiple crypto token prices.
    <br />
    <br />
    <a href="https://github.com/daivasmara/cryptoprice#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/cryptoprice">NPM Page</a>
    ·
    <a href="https://github.com/daivasmara/cryptoprice/issues">Report Bug</a>
    ·
    <a href="https://github.com/daivasmara/cryptoprice/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

**cryptoprice** is a simple CLI tool to fetch the latest multiple crypto token prices in various currencies. All the [Crypto Market Cap & Pricing Data Provided By Nomics](https://nomics.com), therefore to use this tool you need to sign up first to get the API key, which I guarantee you, it will only take you about 2 mins, _even much less!_

[**Sign up here!**](https://p.nomics.com/pricing#free-plan)

Basically the main idea is coming from my own _FOMO (Fear of Missing Out)_ towards cryptos. You see, as an avid observer of cryptos especially `BTC` and `ETH` (at least in the moment I'm writing this). I find visiting exchange sites just to know what's the current price of some tokens is way too much of a hassle and could be much more simplified. It should be just something that I could do while I'm doing something else especially while I'm working I basically stare at the black void that is my terminal anyway. Thus why **cryptoprice** is now here with us.

### Built With

* [NodeJS](https://nodejs.org/en/)


<!-- GETTING STARTED -->
## Getting Started

To get one running in your local you need to:

### Installation

```sh
npm install -g cryptoprice
```

### Commands
 
```sh
cryptoprice [-v | --version] [-h | --help]
cryptoprice store-api-key [key]
cryptoprice fetch [-t <args>] [-c <args>]
```

### Set Up API key
In order to fetch from [Nomics](https://nomics.com) API, you need to get your own API key first, which could easily be done by following this [instructions](https://p.nomics.com/pricing#free-plan), just input some forms and you'll receive an email with your API key. _Yay!_

Now copy your API key, and do:
```sh
cryptoprice store-api-key <YOUR_API_KEY>
```
If success you'll get:
```sh
SUCCESS: API key is now successfully stored on your local machine .env.
```

**CONGRATULATIONS!** now you can fetch the latest multiple crypto token prices anytime you want with no rate limit.

<!-- USAGE EXAMPLES -->
## Usage
```sh
cryptoprice fetch [-t | --tokens <args>] [-c | --currency <args>]
```

You can fetch any amout of crypto token prices at once. Here's an example of fetching price of `BTC`, `ETH`, and `DGX` in `IDR` currency:
```sh
cryptoprice fetch -t btc eth dgx -c idr
```

By default if you don't specify `-t` and `-c` flag, it'll fetch `BTC`, `ETH`, and `DGX` in `USD`
```sh
cryptoprice fetch
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/daivasmara/cryptoprice/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Muhammad Daivasmara Denaw - [LinkedIn](https://www.linkedin.com/in/daivasmara) - daivasmara@gmail.com

Project Link: [https://github.com/daivasmara/cryptoprice](https://github.com/daivasmara/cryptoprice)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/daivasmara/cryptoprice.svg?style=flat-square
[contributors-url]: https://github.com/daivasmara/cryptoprice/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/daivasmara/cryptoprice.svg?style=flat-square
[forks-url]: https://github.com/daivasmara/cryptoprice/network/members
[stars-shield]: https://img.shields.io/github/stars/daivasmara/cryptoprice.svg?style=flat-square
[stars-url]: https://github.com/daivasmara/cryptoprice/stargazers
[issues-shield]: https://img.shields.io/github/issues/daivasmara/cryptoprice.svg?style=flat-square
[issues-url]: https://github.com/daivasmara/cryptoprice/issues
[license-shield]: https://img.shields.io/github/license/daivasmara/cryptoprice.svg?style=flat-square
[license-url]: https://github.com/daivasmara/cryptoprice/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/daivasmara
[product-screenshot]: images/screenshot.png
