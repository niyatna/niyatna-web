from PIL import Image
import os

def crop_and_convert():
    logo_path = "public/niyatna-logo.png"
    favicon_path = "app/favicon.ico"
    
    if not os.path.exists(logo_path):
        print(f"File {logo_path} does not exist!")
        return
        
    img = Image.open(logo_path)
    
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
        
        square_img = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 0))
        offset_x = (max_dim - width) // 2
        offset_y = (max_dim - height) // 2
        square_img.paste(cropped, (offset_x, offset_y))
        
        # Save cropped logo back to public/niyatna-logo.png (1024x1024)
        logo_resized = square_img.resize((1024, 1024), Image.Resampling.LANCZOS)
        logo_resized.save(logo_path)
        print(f"Successfully cropped and saved {logo_path}")
        
        # Save as a multi-resolution ICO to app/favicon.ico
        square_img.save(
            favicon_path, 
            format="ICO", 
            sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        )
        print(f"Successfully generated multi-resolution ICO at {favicon_path}")
    else:
        print("Failed to calculate bounding box for logo.")

crop_and_convert()
