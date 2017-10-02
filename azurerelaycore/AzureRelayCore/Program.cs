using System;
using System.Threading.Tasks;
using AzureRelayCore;
using AzureRelayCore.Infrastructure;

class Program
{
    public static async Task Main(string[] args)
    {
        Startup startup = new Startup();
        IServiceProvider serviceProvider = startup.ConfigureServices();
        IStream relayConnection = (IStream)serviceProvider.GetService(typeof(IStream));
        await relayConnection.StartStreamAsync();
        Console.ReadLine();
    }
}