import { Pipe, PipeTransform } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { crop, fill, scale } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

@Pipe({
    name: 'cloudTrans',
})
export class CloudTransPipe implements PipeTransform {
    transform(value, trans): CloudinaryImage {
        if (!value) return value;
        const cld = new Cloudinary({
            cloud: {
                cloudName: 'dwqmbhhma',
            },
        });
        let id = (() => {
            return value.match(/v\d+.+$/)[0].split('.')[0];
        })();
        let img = cld.image(id);
        if (trans.crop == 'scale') {
            if (trans.width) {
                img.resize(scale().width(trans.width));
            }
            if (trans.height) {
                img.resize(scale().height(trans.height));
            }
        } else if (trans.crop == 'fill') {
            img.resize(fill(trans.width, trans.height));
            if (trans.radius) {
                img.roundCorners(byRadius(trans.radius));
            }
        }
        img.format(trans.format);
        return img.setURLConfig({
            secureDistribution: 'resf.cloudinary.com',
            cname: 'resf.cloudinary.com',
        });
    }
}
