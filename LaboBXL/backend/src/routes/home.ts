import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { logOut } from "../auth";
import axios from "axios";
import cheerio from 'cheerio';

const router = Router()

router.get('/home', auth, catchAsync(async (req, res) => {
  axios.get('http://www.filmlabs.org/wiki//fr/start').then(response => {

    const html = response.data;
    const $ = cheerio.load(html);


    const wiki = $('div', '.page.group').text()
    res.render('axios', {
      wiki, href: $('div.group').each((i, link) => {
        const href = $(link)
          .find('a.wikilink1')
          .attr('href')
      })
    })

  }).catch(error => {
    console.log(error)

  });
}));


router.get(
  "/logout",
  auth,
  catchAsync(async (req, res) => {
    await logOut(req, res);
    res.redirect('/')
  })
);

export default router;

