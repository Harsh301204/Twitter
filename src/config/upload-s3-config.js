import multer from 'multer'
import multerS3 from 'multer-s3-v2'
import aws from 'aws-sdk'
import dotenv from 'dotenv'


dotenv.config()


aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRETKEY,
    accessKeyId: process.env.AWS_ACCESSKEY
})

const S3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

export default upload