using System;
using Microsoft.ML.Data;

namespace JJonahJamesonBot.DataModels
{
    public class ModelOutput
    {
        public string ImagePath { get; set; }

        public string Label { get; set; }

        public string PredictedLabel { get; set; }
    }
}
