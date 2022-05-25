using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ML;
using JJonahJamesonBot.DataModels;

namespace JJonahJamesonBot.Controllers
{
    [ApiController]
    [Route("api/[controller]/{data?}")]
    public class JJonahJamesonController : Controller
    {
        private readonly PredictionEnginePool<ModelInput, ModelOutput> _predictionEnginePool;

        public JJonahJamesonController(PredictionEnginePool<ModelInput, ModelOutput> predictionEnginePool)
        {
            _predictionEnginePool = predictionEnginePool;
        }

        [HttpGet]
        public string Get(string data)
        {

            byte[] image = Convert.FromBase64String(data);
            ModelInput input = new ModelInput();
            input.Image = image;

            //ModelOutput prediction = _predictionEnginePool.Predict(modelName: "JJonahJamesonModel", example: input);

            //string classification = prediction.PredictedLabel;

            string classification = "spiderman";

            return classification;
        }

        [HttpPost]
        public ActionResult<string> Post([FromForm] string imageBase64)
        {
            byte[] imageBytes = Convert.FromBase64String(imageBase64);
            ModelInput input = new ModelInput();
            input.Image = imageBytes;

            string classification;
            try
            {
                ModelOutput prediction = _predictionEnginePool.Predict(modelName: "JJonahJamesonModel", example: input);

                classification = prediction.PredictedLabel;
            }
            catch (Exception ex)
            {
                classification = $"Source: {ex.Source} Name: {ex.GetType().Name} Message: {ex.Message} Inner Exception: {ex.InnerException}";
            }

            return Ok(classification);
        }
    }
}
