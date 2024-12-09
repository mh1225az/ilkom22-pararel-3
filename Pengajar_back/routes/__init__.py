from .materi_routes import materi_routes  # Mengimpor router untuk materi

def register_blueprints(app):
    # Mendaftarkan Blueprint dengan prefix /materi
    app.register_blueprint(materi_routes, url_prefix='/materi')
