import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  FOLDER = 'images/';
  constructor() { }

  uploadfile(file) {
 
    const bucket = new S3(
      {
        accessKeyId: 'AKIA2X5ZZ2Z5LC3NPBOK',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );
 
    const params = {
      Bucket: 'jackshukla-live',
      Key: this.FOLDER + file.name,
      Body: file
    };
 
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
 
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
