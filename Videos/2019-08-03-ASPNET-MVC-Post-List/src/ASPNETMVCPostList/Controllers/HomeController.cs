using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETMVCPostList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult KidNames()
        {
            var viewModel = new Models.KidNamesViewModel
            {
                KidNames = new List<string>
                {
                    "Pete",
                    "Jane"
                }
            };
            return View(viewModel);
        }

        [HttpPost]
        public ActionResult KidNames(Models.KidNamesViewModel viewModel) 
        {
            //TODO save logic here
            return View(viewModel);
        }

        public ActionResult Kids()
        {
            var viewModel = new Models.KidsViewModel
            {
                Kids = new List<Models.Kid>
                {
                    new Models.Kid
                    {
                        Id = 1,
                        Name = "Pete Doe",
                        Age = 7
                    },
                    new Models.Kid
                    {
                        Id = 2,
                        Name = "Jane Johnson",
                        Age = 3
                    }
                }
            };
            return View(viewModel);
        }

        [HttpPost]
        public ActionResult Kids(Models.KidsViewModel viewModel)
        {
            //TODO save logic here
            return View(viewModel);
        }
    }
}