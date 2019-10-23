using Umbraco.Core.Models;

namespace Umbraco.Core.PropertyEditors
{
    public interface IDataEditorWithMediaPath : IDataEditor
    {
        string GetMediaPath(object value);
    }
}
