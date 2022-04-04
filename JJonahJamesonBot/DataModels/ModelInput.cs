using System;
using Microsoft.ML.Data;

namespace JJonahJamesonBot.DataModels
{
    public class ModelInput
    {
        [LoadColumn(0)]
        public byte[] Image { get; set; }

        [LoadColumn(1)]
        public UInt32 LabelAsKey { get; set; }

        [LoadColumn(2)]
        public string ImagePath { get; set; }

        [LoadColumn(3)]
        public string Label { get; set; }
    }
}
