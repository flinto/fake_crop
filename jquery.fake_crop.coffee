# Created by Flinto, LLC
# https://www.flinto.com

jQuery.fn.fakeCrop = () ->

  fakeCrop = (wrap) ->
    # ensure wrap can hide image extremities
    wrap.css(overflow: 'hidden')
    img = wrap.find('img')

    # reset any existing margins/width
    img.css(marginLeft: "", marginTop: "", width: "", height: "")

    # initial dimensions based on the image's dimensions
    initial =
      width: img[0].width
      height: img[0].height

    # final dimensions are based on the container's dimensions
    final =
      width: wrap.width()
      height: wrap.height()

    initial.ratio = initial.width / initial.height
    final.ratio = final.width / final.height

    # use the width to height ratios to determine in which direction the image will be constrained
    if initial.ratio == final.ratio
      img.width(final.width)
    else
      if initial.ratio < final.ratio
        [dimension, otherDimension, offsetDirection] = ['width', 'height', 'top']
      else
        [dimension, otherDimension, offsetDirection] = ['height', 'width', 'left']

      # set the constrained dimension value
      img[dimension](final[dimension])

      # determine and set the necessary offset in the other dimension
      offset = (img[otherDimension]() - final[otherDimension]) / -2
      img.css "margin-#{offsetDirection}", "#{offset}px"
    img.show()


  $(this).each (i, e) => fakeCrop($(e))
  return $(this)