from PIL import Image
import os

def crop_image_borders(image_path):
    if not os.path.exists(image_path):
        print(f"File {image_path} does not exist!")
        return
    
    img = Image.open(image_path)
    
    # Ensure image has alpha channel
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    bbox = img.getbbox()
    if bbox:
        # Crop to the actual icon content
        cropped = img.crop(bbox)
        
        # Make it a perfect square
        width, height = cropped.size
        max_dim = max(width, height)
        
        # Create a new square image with transparent background
        square_img = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 0))
        
        # Center the cropped image
        offset_x = (max_dim - width) // 2
        offset_y = (max_dim - height) // 2
        square_img.paste(cropped, (offset_x, offset_y))
        
        # Resize to original size or a standard high-res size (e.g. 1024x1024)
        target_size = 1024
        resized = square_img.resize((target_size, target_size), Image.Resampling.LANCZOS)
        
        # Save back to file
        resized.save(image_path)
        print(f"Successfully cropped and resized {image_path} to {target_size}x{target_size}!")
    else:
        print(f"Could not calculate bounding box for {image_path} (image might be fully transparent).")

crop_image_borders("public/niyatna-icon.png")
crop_image_borders("app/favicon.ico")
