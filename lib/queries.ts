import { groq } from "next-sanity";

// export const HOME_QUERY = groq`
//   *[_type == "landingPage" && _id == "landingPage"][0]{
//     _id,
//     title,
//     description,
//     "ogImageUrl": ogImage.asset->url,
//     blocks[]{
//       _key,
//       _type,

//       // 1. Education & Certification Block
//       _type == "educationBlock" => {
//         sectionTitle,
//         items[]->{
//           _id,
//           institution,
//           degree,
//           fieldOfStudy,
//           certificateUrl,
//           startDate,
//           endDate,
//           description
//         }
//       },

//       // 2. Experience Block
//       _type == "experienceBlock" => {
//         sectionTitle,
//         items[]->{
//         _id,
//         company,
//         "logo": logo.asset->url,
//         role,
//         location,
//         website,
//         linkedin,
//         startDate,
//         endDate,
//         isCurrentRole,
//         technologies,
//         description
//         }
//       },

//       // 3. Projects Block
//       _type == "projectsBlock" => {
//         sectionTitle,
//         projects[]->{
//           _id,
//           title,
//           description,
//           "image": image.asset->url,
//           bannerBg,
//           status,
//           liveUrl,
//           codeUrl,
//           techStack
//         },
//         categories[]->{
//           _id,
//           title,
//           "slug": slug.current
//         }
//       },

//       // 4. Contact Block
//       _type == "contactBlock" => {
//        _type,
//         _key,
//         sectionTitle,
//         contactRef->{
//           _id,
//           _type,
//           headline,
//           socialLinks[] {
//             _key,
//             platform,
//             url
//           },
//           footerBgImage {
//             asset-> {
//               _id,
//               url
//             },
//             hotspot,
//             crop
//           },
//           developerName,
//           developerUrl
//         }
//       },



//             // About / Profile Block
//       _type == "aboutBlock" => {
//         sectionTitle,
//         variant,
//         profileRef-> {
//           _id,
//           fullName,
//           tagline,
//           shortBio,
//           fullBioHeading,
//           fullBio,
//           "avatarUrl": avatar.asset->url,
//           "bannerImageUrl": bannerImage.asset->url,
//           resumeUrl,
//           focusAreas,
//           closingText,
//           email
//         }
//       },

//       // 5. Rich Text Block
//       _type == "richTextBlock" => {
//         content[]{
//           ...,
//           _type == "image" => {
//             ...,
//             "asset": asset->
//           }
//         }
//       }
//     }
//   }
// `;



export const HOME_QUERY = groq`
  *[_type == "landingPage"][0]{
    _id,
    title,
    description,
    "ogImageUrl": ogImage.asset->url,
    blocks[]{
      _key,
      _type,

      // 1. Education & Certification Block
      _type == "educationBlock" => {
        _key,
        _type,
        sectionTitle,
        items[]->{
          _id,
          institution,
          degree,
          fieldOfStudy,
          certificateUrl,
          startDate,
          endDate,
          description
        }
      },

      // 2. Experience Block
      _type == "experienceBlock" => {
        _key,
        _type,
        sectionTitle,
        items[]->{
          _id,
          company,
          "logo": logo.asset->url,
          role,
          location,
          website,
          linkedin,
          startDate,
          endDate,
          isCurrentRole,
          technologies,
          description
        }
      },

      // 3. Projects Block
      _type == "projectsBlock" => {
        _key,
        _type,
        sectionTitle,
        projects[]->{
          _id,
          title,
          description,
          "image": image.asset->url,
          "imageUrl": image.asset->url,
          bannerBg,
          status,
          liveUrl,
          codeUrl,
          techStack
        },
        categories[]->{
          _id,
          title,
          "slug": slug.current,
          projects[]->{
            _id,
            title,
            description,
            "image": image.asset->url,
            "imageUrl": image.asset->url,
            bannerBg,
            status,
            liveUrl,
            codeUrl,
            techStack
          }
        }
      },

      // 4. Contact Block
      _type == "contactBlock" => {
        _key,
        _type,
        sectionTitle,
        contactRef->{
          _id,
          _type,
          headline,
          socialLinks[] {
            _key,
            platform,
            url
          },
          footerBgImage {
            asset-> {
              _id,
              url
            },
            hotspot,
            crop
          },
          developerName,
          developerUrl
        }
      },

      // About / Profile Block
      _type == "aboutBlock" => {
        _key,
        _type,
        sectionTitle,
        variant,
        profileRef-> {
          _id,
          fullName,
          tagline,
          shortBio,
          fullBioHeading,
          fullBio,
          "avatarUrl": avatar.asset->url,
          "bannerImageUrl": bannerImage.asset->url,
          resumeUrl,
          focusAreas,
          closingText,
          email
        }
      },

      // 5. Rich Text Block
      _type == "richTextBlock" => {
        _key,
        _type,
        content[]{
          ...,
          _type == "image" => {
            ...,
            "asset": asset->
          }
        }
      }
    }
  }
`;

export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    description,
    "slug": slug.current,
    blocks[] {
      _key,
      _type,

      // Education Block
      _type == "educationBlock" => {
        sectionTitle,
        items[]->
      },

      // Experience Block
      _type == "experienceBlock" => {
       _id,
        sectionTitle,
        items[]->
      },

      // Projects Block
      _type == "projectsBlock" => {
        sectionTitle,
        projects[]-> {
          _id,
          _type,
          title,
          "slug": slug.current,
          description,
          image,
          "imageUrl": image.asset->url,
          bannerBg,
          status,
          liveUrl,
          codeUrl,
          techStack
        },
        categories[]-> {
          _id,
          _type,
          title,
          slug,
          projects[]-> {
            _id,
            _type,
            title,
            description,
            image,
            "imageUrl": image.asset->url,
            bannerBg,
            status,
            liveUrl,
            codeUrl,
            techStack
          }
        }
      },

      // About / Profile Block
      _type == "aboutBlock" => {
        sectionTitle,
        variant,
        profileRef-> {
          _id,
          fullName,
          tagline,
          shortBio,
          fullBioHeading,
          fullBio,
          "avatarUrl": avatar.asset->url,
          "bannerImageUrl": bannerImage.asset->url,
          resumeUrl,
          focusAreas,
          closingText,
          email
        }
      },

      // Contact Block
      _type == "contactBlock" => {
        sectionTitle,
        contactRef-> {
          _id,
          headline,
          socialLinks,
          footerBgImage,
          developerName,
          developerUrl
        }
      },

      // Rich Text Block
      _type == "richTextBlock" => {
        content
      },

      // Blog Block
      _type == "blogBlock" => {
        sectionTitle,
        "blogs": select(
          defined(blogs) && count(blogs) > 0 => blogs[]-> {
            _id,
            title,
            "slug": slug.current,
            description,
            coverImage,
            "imageUrl": coverImage.asset->url,
            bannerBg,
            publishedAt,
            readTime
          },
          // Fallback: If no specific blogs selected in CMS, fetch all blogs sorted by date
          *[_type == "blogs"] | order(publishedAt desc) {
            _id,
            title,
            "slug": slug.current,
            description,
            coverImage,
            "imageUrl": coverImage.asset->url,
            bannerBg,
            publishedAt,
            readTime
          }
        )
      }
    }
  }
`;
