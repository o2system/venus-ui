import tinymce from 'tinymce/tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';
import 'tinymce/themes/inlite/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/help';
import 'tinymce/plugins/code';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/table';
import 'tinymce/plugins/media';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/advlist';


// Initialize the app
tinymce.init({
    selector: '.tinymce',
    height: 300,
    menubar: false,
    themes: "modern",
    // inline: true,
    statusbar: false,
    plugins: ['advlist autolink lists link image charmap print preview anchor textcolor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code help wordcount'
    ],
    setup: function (editor) {
        editor.on('keyup', e => console.log(editor.getContent()))
    }
});

// $(document).ready(function () {
//     // TinyMCE Post Editor
//     tinymce.init({
//         selector: '.tinymce',
//         height: 300,
//         menubar: false,
//         themes: "inlite",
//         statusbar: false,
//         plugins: [
//             'advlist autolink lists link image charmap print preview anchor textcolor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table contextmenu paste code help wordcount'
//         ],
//         toolbar: 'insert |  formatselect | bold italic blockquote alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat | code',
//     });
//
//     tinymce.init({
//         selector: '.tinymce-inline',
//         theme: 'inlite',
//         plugins: [
//             'advlist autolink lists link image charmap print preview anchor textcolor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table contextmenu paste code help wordcount'
//         ],
//         insert_toolbar: 'formatselect | bullist numlist outdent indent | quickimage quicktable media codesample',
//         selection_toolbar: 'formatselect | bold italic quicklink blockquote alignleft aligncenter alignright alignjustify removeformat ',
//         inline: true,
//         paste_data_images: true
//     });
// });